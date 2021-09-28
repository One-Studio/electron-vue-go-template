//导入类型，提供mutation名的提示，预防拼写错误
import * as types from './../types/app-types';
import axios from "axios";
import * as backend from "../../ipc/backend";
import * as application from "../../ipc/application";

//app相关数据
const app = {
    state: {
        version: '0.0.1',
        system: 'win32',
        fullscreenable: false,
        fullscreen: false,
        inited: false,
        port: 12580,
    },
    //数据交互，更新state的唯一方法
    mutations: {
        [types.SET_VERSION](state, version) {
            state.version = version
        },
        [types.SET_SYSTEM](state, system) {
            state.system = system
        },
        [types.SET_FULLSCREENABLE](state, fullscreenable) {
            state.fullscreenable = fullscreenable
        },
        [types.SET_FULLSCREEN](state, fullscreen) {
            state.fullscreen = fullscreen
        },
        [types.SET_INITED](state, inited) {
            state.inited = inited
        },
        [types.SET_PORT](state, port) {
            state.port = port
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
            //获取app相关数据
            const data = await application.initApp()
            console.log(data)
            if(data === null || undefined) {
                console.log('初始化出错')
            } else {
                commit(types.SET_VERSION, data.version)
                commit(types.SET_SYSTEM, data.system)
                commit(types.SET_FULLSCREENABLE, data.fullscreenable)
                commit(types.SET_FULLSCREEN, data.fullscreen)
            }

            //获取后端的端口号
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
