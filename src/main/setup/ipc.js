//window由于只调用win的方法就不单独设置位置了
export function setup(win) {
    const window = require('/src/main/window/main')
    // const test = require('/src/main/test/ipc')
    // const file = require('/src/main/file/ipc')

    window.setup(win)
    // test.setup(win)
    // file.setup()
}
