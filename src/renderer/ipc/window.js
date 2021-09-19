//渲染进程窗口控制
const channel = ['min', 'max', 'close', 'toggle-fullscreen', 'set-fullscreen']
export {channel, min, max, close, toggleFullscreen, setFullscreen}

function min() {
    window.api.send('min')
}

function max() {
    window.api.send('max')
}

function close() {
    window.api.send('close')
}

function toggleFullscreen() {
    window.api.send('toggle-fullscreen')
}

function setFullscreen(flag) {
    window.api.send('set-fullscreen', flag)
}

// export function setMin() {
//     window.api.send('set-min')
// }
//
// export function startDrag(fileName) {
//     window.api.startDrag(fileName)
// }
