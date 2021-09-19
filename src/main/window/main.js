//主进程窗口控制
export function setup(win) {
    const {ipcMain} = require("electron");

    ipcMain.on('min', () => {
        win.minimize()
    });

    ipcMain.on('max', () => {
        if (win.fullscreenable) {
            win.isMaximized()? win.unmaximize(): win.maximize()
        }
    });

    ipcMain.on('close', () =>{
        win.close()
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
