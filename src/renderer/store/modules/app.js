//导入类型，提供mutation名的提示，预防拼写错误
import * as types from './../types/app-types'

//app相关数据
const app = {
    state: {
        version: '0.0.1',
        system: 'win32',
        fullscreenable: false,
        inited: false,
        backendPort: 12580,
    },
    //数据交互，更新state的唯一方法
    mutations: {
        [types.SET_VERSION](state, version) {
            state.version = version
        }
    },
    //带异步，业务，调用mutations操作state，响应用户输入
    actions: {
        actSetVersion({ commit }, data) {
            console.log(data)
            commit(types.SET_VERSION, '520.13.14')
        }
    }
}

export default app
