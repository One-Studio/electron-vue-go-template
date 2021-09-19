//隔离空间预加载js
const { contextBridge, ipcRenderer } = require('electron')
const { ipc_list } = require('@/preload/ipc_list')

//载入可用的channel通道
let validChannels = []
for (let i of ipc_list) {
    const {channel} = require('/src/renderer/ipc/' + i);
    validChannels = [...validChannels, ...channel]
}

// const path = require('path')

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
