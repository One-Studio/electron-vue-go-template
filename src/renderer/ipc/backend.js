//测试
const channel = ['get-port']
export {channel, getPort}

async function getPort() {
    return await window.api.invoke('get-port')
}
