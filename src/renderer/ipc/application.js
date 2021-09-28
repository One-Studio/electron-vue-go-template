//app相关
const channel = ['init-app']
export {channel, initApp}

async function initApp() {
    return await window.api.invoke('init-app')
}
