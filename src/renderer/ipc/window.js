//渲染进程窗口控制js
const channel_window = ['min', 'max', 'close']

function min() {
    window.api.send('min')
}

function max() {
    window.api.send('max')
}

function close() {
    window.api.send('close')
}

// export function setMin() {
//     window.api.send('set-min')
// }
//
// export function startDrag(fileName) {
//     window.api.startDrag(fileName)
// }

export {channel_window, min, max, close}
