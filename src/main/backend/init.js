//管理后端服务的开启等
import {ipcMain} from "electron";
const path = require('path')
const filepath =
    (process.env.NODE_ENV === 'production'?
        path.join(process.cwd(), 'resources', 'backend'):
        './backend/bin/backend')
    + (process.platform === 'darwin'?
        '':
        '.exe')

function setup(app) {
    const portfinder = require('portfinder');

    //后端默认端口号
    portfinder.basePort = Number(process.env.VUE_APP_BACKEND_PORT_DEFAULT);

    //获取后端的端口号
    portfinder.getPortPromise()
        .then((port) => {
            console.log("后端端口号=", port)

            //监听IPC消息传递端口号
            const {ipcMain} = require("electron");
            ipcMain.handle('get-port', async () => {
                return port
            })

            //启动后端程序
            const child_process = require('child_process');
            child_process.execFile(
                filepath, [
                    '--backport', port,
                    '--configDir', path.join(app.getPath('appData'), process.env.VUE_APP_NAME)
                ],
                function(err,stdout,stderr){
                    if(err){
                        console.error(err);
                    }
                    console.log("stdout:",stdout)
                    console.log("stderr:",stderr);
                })
        })
        .catch((err) => {
            console.log('后端端口号获取失败')
            console.log(err)
        });
}

export {setup}
