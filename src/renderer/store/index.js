// 这里跟vue2有点区别，vue2中是直接导入vue，然后通过vue.use(xxx)
import { createStore, createLogger } from 'vuex'
import getters from './getters'
//导入modules文件夹下所有模块
const modulesFiles = require.context('./modules', true, /\.js$/)
let modules = {}
modulesFiles.keys().forEach(k => {
    let n = k.substring(2, k.length - 3)
    modules[n] = modulesFiles(k).default
})

// 调用createStore
const store = createStore({
    getters,
    modules,
    plugins: [createLogger()]
})

export default store
