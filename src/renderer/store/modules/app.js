//导入类型，提供mutation名的提示，预防拼写错误
import * as types from './../types/app-types';
import axios from "axios";
import * as backend from "../../ipc/backend";

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
        },
        [types.SET_PORT](state, port) {
            state.backendPort = port
        }
    },
    //带异步，业务，调用mutations操作state，响应用户输入
    actions: {
        actSetVersion({ commit }, data) {
            console.log(data)
            commit(types.SET_VERSION, '520.13.14')
        },
        // async getPort({ commit }) {
        //     const port = await backend.getPort()
        //     console.log('port=', port)
        //     commit(types.SET_PORT, port)
        // },
        async init({ getters, commit }) {
            const port = await backend.getPort()
            console.log('port=', port)
            commit(types.SET_PORT, port)
            axios
                .get('http://127.0.0.1:'+ getters.backendPort +'/hello')
                .then(response => {
                    const data = response.data
                    console.log(data.version)
                    alert(data.version)
                })
                .catch(error => {
                    alert(error)
                })
        },
    }
}

export default app
