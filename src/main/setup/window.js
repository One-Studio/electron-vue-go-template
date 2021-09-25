// electron 窗口设置
let opt
if (process.platform === "darwin") { //"win32"
    opt = {
        width: 840,
        height: 590,
        frame: false,
        transparent: true,
    }
} else {
    opt = {
        width: 864,
        height: 610,
        frame: false,
        transparent: true,
    }
}


const path = require('path')
const options = {
    title: "electron-vue-go",
    width: opt.width,
    height: opt.height,
    resizable: true,
    fullscreenable: true,
    trafficLightPosition: false,

    //无边框窗口
    frame: opt.frame,
    transparent: opt.transparent,
    titleBarStyle: "customButtonsOnHover",
    backgroundColor: "#00000000",
    hasShadow: true,
    visualEffectState: "active",
    vibrancy: "light", //毛玻璃效果 mac下🎮
    // show:false,

    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
        contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
        enableRemoteModule: false,
        sandbox: false,
        experimentalFeatures: true,
    }
}

export {options}
