//管理后端服务的开启等
import {app} from "electron";

const path = require('path')
const filepath =
    (process.env.NODE_ENV === 'production'?
        path.join(process.cwd(), 'resources', 'backend'):
        './backend/bin/backend')
    + (process.platform === 'darwin'?
        '':
        '.exe')
export {setup}

function setup(app) {
    //debug路径
    console.log(app.getAppPath())           //E:\GitHub-Repo\electron-vue-go-template\build
    console.log(app.getPath('appData'))     //C:\Users\Purp1e\AppData\Roaming
    console.log(app.getPath('cache'))       //C:\Users\Purp1e\AppData\Roaming
    console.log(app.getPath('logs'))        //C:\Users\Purp1e\AppData\Roaming\electron-vue-go-template\Electron\logs
    console.log(app.getPath('exe'))         //E:\GitHub-Repo\electron-vue-go-template\node_modules\electron\dist\electron.exe
    console.log(app.getPath('home'))        //C:\Users\Purp1e
    console.log(app.getPath('crashDumps'))  //C:\Users\Purp1e\AppData\Roaming\electron-vue-go-template\Crashpad
    console.log(app.getPath('desktop'))     //C:\Users\Purp1e\Desktop
    console.log(app.getPath('documents'))   //C:\Users\Purp1e\Documents
    console.log(app.getPath('downloads'))   //C:\Users\Purp1e\Downloads
    console.log(app.getPath('module'))      //E:\GitHub-Repo\electron-vue-go-template\node_modules\electron\dist\electron.exe
    console.log(app.getPath('music'))       //C:\Users\Purp1e\Music
    console.log(app.getPath('pictures'))    //C:\Users\Purp1e\Pictures
    console.log(app.getPath('recent'))      //C:\Users\Purp1e\AppData\Roaming\Microsoft\Windows\Recent
    console.log(app.getPath('temp'))        //C:\Users\Purp1e\AppData\Local\Temp

    const portfinder = require('portfinder');
    portfinder.basePort = 12580;

    //获取后端的端口号
    portfinder.getPortPromise()
        .then((port) => {
            const child_process = require('child_process');

            console.log(filepath)
            console.log("后端端口号=" + port)
            child_process.execFile(
                filepath,
                ['--backport', port],
                function(err,stdout,stderr){
                    if(err){
                        console.error(err);
                    }
                    console.log("stdout:",stdout)
                    console.log("stderr:",stderr);
                })
        })
        .catch((err) => {
            console.log('获取后端端口号失败')
            console.log(err)
        });
}
