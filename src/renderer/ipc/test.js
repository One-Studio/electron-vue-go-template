//测试
const channel = ['test']
export {channel, test}

function test() {
    const res = window.api.sendSync('test')
    console.log(res)
}
