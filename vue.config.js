//构建、打包配置
const suffix = process.env.platform === 'win32'? '.exe':''
console.log(suffix)

module.exports = {
    pluginOptions: {
        electronBuilder: {
            mainProcessFile: 'src/main/main.js',	// 主进程入口js
            rendererProcessFile: 'src/renderer/main.js',	// 渲染进程入口js
            mainProcessWatch: [
                'src/main/setup/window.js',
                'src/main/setup/tray.js',
                'src/main/setup/ipc.js',
                'src/main/setup/backend.js',
            ],	//调试时哪些文件改动时reload
            preload: 'src/preload/main.js',	// 预加载js
            outputDir: 'build',	// web打包输出目录
            nodeIntegration: false,
            builderOptions: {
                // 必须要设置，是一个程序的唯一标识符，还与后面的程序自动更新有关
                // appId: bundleId,
                // 项目名 这也是生成的exe文件的前缀名，指定一下程序名称，这个对于后面创建桌面快捷方式和开始菜单都有关系
                productName: process.env.VUE_APP_TITLE,
                // productName: "electron-vue-go-template",	// 项目名
                copyright: 'Copyright © 2021 ${author}',	// 版权信息
                compression: 'maximum',
                asar: true,
                directories: {
                    output: "dist",	// electron打包输出目录
                },
                extraResources:{
                    from: './backend/bin/backend' + suffix,
                    to: './backend' + suffix
                },
                nsis: {
                    oneClick: true,  //一键安装
                    allowToChangeInstallationDirectory: false,  //用户不可以修改安装位置
                    perMachine: true,  //安装在Program Files
                    // installerIcon: "./public/app-icon/app.ico",
                    // uninstallerIcon: "./public/app-icon/app.ico",
                    // installerHeaderIcon: "./public/app-icon/app.ico",
                    createDesktopShortcut: true,	//创建桌面快捷方式
                    createStartMenuShortcut: true,	//创建开始菜单快捷方式
                    shortcutName: "electron-vue-go"	//快捷方式名
                },

                win: {
                    // target: [ { target: "nsis", "arch": [ "x64", "ia32" ] }],
                    // ↑ 和 ↓ 注释删除效果一致，都是在安装包内打包32+64位应用，根据情况安装对应版本
                    target: [
                        { target: "nsis", "arch": [ "x64"] },	//64位
                        // { target: "nsis", "arch": [ "ia32" ] }, //32位
                        // { target: "nsis-web", "arch": [ "x64"] }, //考虑到github网络问题，不用网络版
                        // { target: "portable", "arch": [ "x64"] }, //如果用户配置放在合适位置可以用单文件
                        // { target: "msi", "arch": [ "x64"] },  //和nsis自动安装没区别，文件还更大，界面更丑
                    ],
                    // icon: "./public/app-icon/app.ico",  //自动生成的图标在放大时会有显示问题，故用installer的图标
                    requestedExecutionLevel: "asInvoker", //app启动权限，管理员启动时拖拽功能失效
                },

                mac: {
                    // icon: "icon/icon.icns"
                },

                linux: {
                    // icon: "icon"
                }
            }
        }
    }
}
