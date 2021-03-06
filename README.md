# electron-vue-go-template

## 引言

electron 看似很好上手，实际上有不少坑。常见的系统托盘，跨平台构建等等根据文档花一段时间测试一下即可，但是前后端交互和性能等有不少坑：

* electron分为主进程和若干渲染进程，为了安全考虑，建议不在渲染进程中暴露node runtime，而是通过preload.js暴露出一部分方法交由单线程的主进程处理，这增加了复杂程度；后端启动web服务通过接口进行交互也是可行的
* 同时类似文件读取这样的CPU密集型任务，及时用异步方法也会造成主进程阻塞，同时导致界面卡住不动，可以用 webworker 之类的方法帮助 处理这些任务，但是 webworker 也有诸多限制，比如不支持fs；设置子进程也可以解决（这种方案也可以考虑）
* 源代码保护也是一个问题

所以在基础的框架下，想要有性能不错且前后端非常清楚简便需要非常折腾，那为什么不让 python golang 这些语言专门做后端服务，把界面相关和交互的一部分放在electron中，用web服务通过接口调用的方式交互？ 在技术选型调研时尝试过很多其他框架，有的把electron中众多的方法暴露给go中调用，同时不少都有各式各样的问题，在看到[这个项目](https://github.com/fyears/electron-python-example)的做法之后深受启发，electron相关东西留在electron里，相关轮子和文档都很成熟，go专门做后端，性能和包都不用担心，唯一的问题就是把web服务处理好，处理安全隐患和使用上的BUG。本项目即做该尝试，想要整理出一个模板/框架，为后续项目开发提供基础。

## 技术选型

* electron - 跨平台、打包等
* vue - 视图
* go - goframe框架（非常丰富的模块化框架，包括这里要用的web服务）
* grpc（后期改进时使用）

> 具体如vue版本、js还是ts、rpc框架选择等可以参照着调整，本项目选型为项目组以后的项目考虑

## 架构/思路

* 界面相关交给vue，涉及到窗口相关与主进程间通信 `IPCMain` `IPCRenderer` 解决、涉及到业务则与go启动的web服务器沟通
* electron 的 `NodeIntegration` 关闭，仍然会使用preload.js，用混淆+bytenode转换为字节码增加破解成本
* 核心业务全部交给后端go开启的web服务，项目中对**前后端交互**（参数解析转换与返回）做一层**封装**
* 系统托盘、窗口设置等 electron 已经成熟的设置直接用IPC调整即可，如需通过后端调整则调用上一条的封装
* 前端vue考虑使用vuex存储各项设置（后期改进？）
* （待定）node主进程和go都开个web服务？？go->electron会不会有问题？？

### 启动

1. electron初始化，参照 `background.js` 的执行过程，在靠前位置异步初始化go后端
   1. 查询可用端口号
   2. 调用编译好的后端可执行文件，参数传递包含端口号
   3. go后端初始化，如端口被占用则返回错误，以上过程间隔3s重复多次，如依然失败则异常退出（肯定有人搞事情
   4. 主进程访问后端API，传递应用必要数据
2. 初始化electron各项设定，启动渲染进程，展示Loading界面，并监听主进程IPC消息后通知主进程，等待后端初始化后返回状态与后端端口号，一切就绪后结束loading，显示主界面
3. 前端----(参数)---->后端 or 前端----(参数)---->后端----(返回值)---->前端：访问 [http://127.0.0.1](http://127.0.0.1):端口号/aaa/bbb/ccc
4. 每过一段时间（10秒？）主进程会向后端发送请求确认状态，无返回则认为后端挂掉了，前端freeze并重新回到1

### 结束

* 在electron入口js中可以处理应用关闭时的动作，此时可以发送请求关闭服务，让后端保存程序设置（最好不要直接kill），主进程检测到后端进程结束后正常退出
* 见启动第4步，后端进程过一段时间（30秒？）无请求则会保存设置正常结束进程

## **项目初始化记录**

1. `npm install -g @vue/cli` 安装命令行工具

2. `vue create .`  选择vue3

3. **新建** .yarnrc 文件，把代理信息填入并保存

   ```
   registry "https://registry.npm.taobao.org"
   sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
   phantomjs_cdnurl "http://cnpmjs.org/downloads"
   electron_mirror "https://npm.taobao.org/mirrors/electron/"
   sqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"
   profiler_binary_host_mirror "https://npm.taobao.org/mirrors/node-inspector/"
   chromedriver_cdnurl "https://cdn.npm.taobao.org/dist/chromedriver"
   ```

4. `vue add electron-builder` 安装electron

5. 因为是如上插件的方式安装的electron，所以根目录新建 `vue.config.js`，修改主进程和渲染进程的入口文件，前端构建到build目录，之后合并打包到dist目录

6. 修改App.vue达到无边框时也有窗体阴影，加入TitleBar.vue组件代替原生标题栏

7. 安装axios

8. 根据[goframe的推荐项目结构](https://goframe.org/pages/viewpage.action?pageId=1114203)于backend文件夹引入go项目
   1. 首先下载gf命令行工具 https://github.com/gogf/gf-cli/releases
   2. 根据项目说明安装改工具 https://github.com/gogf/gf-cli
   3. `gf init backend`

9. ```
   cd backend
   gf build main.go -o ./bin/backend.exe
   //后来发现这样没法传递 -ldflags="-w -s"，故使用
   go build -o ./bin/backend.exe -ldflags="-w -s" main.go
   ```

10. 在 vue.config.js 中修改打包设置，把 ./bin/backend.exe 转移到resources目录，electron启动时调用 /src/main/setup/init.js 启动后端

## 使用说明

安装依赖

```
yarn install
cd backend
go get
```

### 调试

```
//打包后端
go build -o ./bin/backend.exe -ldflags="-w -s" main.go
//调试前端
yarn electron:serve
//或者
yarn s
```

### 构建

```
//打包后端
go build -o ./bin/backend.exe -ldflags="-w -s" main.go
yarn electron:build
//或者
yarn go
```

linux构建选项

```
AppImage, snap, deb, rpm, freebsd, pacman, p5p, apk, 7z, zip, tar.xz, tar.lz, tar.gz, tar.bz2, dir
```

### 语法检查修复

```
yarn lint
```

