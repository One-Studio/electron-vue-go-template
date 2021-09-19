//隔离空间预加载js
const { contextBridge, ipcRenderer } = require('electron')
// const path = require('path')

//设置各文件的channel通道
// const { channel_window } = require('/src/render/ipc/window')
// const { channel_test } = require('/src/render/ipc/test')
// const { channel_file } = require('/src/render/ipc/file')

//可用的channel通道
const validChannels = [
    // ...channel_window,
    // ...channel_test,
    // ...channel_file
]

contextBridge.exposeInMainWorld(
    "api", {
        //sendSync需要返回值！！！否则freeze
        sendSync: (channel, ...args) => {
            if (validChannels.includes(channel)) {
                return ipcRenderer.sendSync(channel, ...args);
            }
        },
        send: (channel, ...args) => {
            if (validChannels.includes(channel)) {
                return ipcRenderer.send(channel, ...args);
            }
        },
        on: (channel, func) => {
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender`
                ipcRenderer.on(channel, (event, ...args) => func(event, ...args));
            }
        },
        invoke: (channel, ...args) => {
            if (validChannels.includes(channel)) {
                return ipcRenderer.invoke(channel, ...args);
            }
        },
        // startDrag: (fileName) => {
        //     ipcRenderer.send('ondragstart', path.join(process.cwd(), fileName))
        // }
    }
);

alert('hello preload.js');
