export {options} from './options'

//主进程窗口控制
export function setup(win) {
    const {ipcMain} = require("electron");

    //窗口最小化
    ipcMain.on('min', () => {
        win.minimize()
    });

    //窗口最大化
    ipcMain.on('max', () => {
        if (win.isResizable()) {
            win.isMaximized()? win.unmaximize(): win.maximize()
        }
    });

    //关闭窗口（应用）
    ipcMain.on('close', () =>{
        win.close()
    });

    //切换全屏
    ipcMain.on('toggle-fullscreen', () =>{
        if (win.fullScreenable) {
            win.setFullScreen(!win.isFullScreen())
        }
    });

    //设置全屏
    ipcMain.on('set-fullscreen', (event, arg) =>{
        let flag = true
        if(arg !== true) {
            flag = false
        }
        win.setFullScreen(flag)
    });


    // ipcMain.on('set-min', () => {
    //     win.setSize(750,500)    //TODO 未完成
    //     win.center()
    // });

    // ipcMain.on('ondragstart', (event, filePath) => {
    //     const path = require('path')
    //
    //     // console.log(filePath)
    //     event.sender.startDrag({
    //         file: filePath,
    //         icon: path.join(__static, '/app.ico')   //这里路径是src/render/public/...
    //     })
    // });
}
