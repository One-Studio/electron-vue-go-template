//app初始化

function setup(win) {
    //初始化
    const {ipcMain} = require("electron");
    ipcMain.handle('init-app', async () => {
        return {
            version: process.env.VUE_APP_VERSION,
            system: process.platform,
            fullscreenable: win.fullscreenable,
            fullscreen: win.isFullScreen(),
        }
    })

}


export {setup}
