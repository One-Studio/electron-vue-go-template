// electron 窗口设置
const path = require('path')
const options = {
    title: "electron-vue-go",
    width: 900,
    height: 720,
    minWidth: 600,
    minHeight: 480,
    // maxWidth: 810,
    // maxHeight: 540,
    resizable: true,
    fullscreenable: true,
    // trafficLightPosition: false,

    //无边框窗口
    frame: true,
    // transparent: true,
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
