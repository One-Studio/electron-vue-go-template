//vuex getters
//vue组件中引入getters之后可以像data中的数据直接用在template中
const getters = {
    version: (status) => status.app.version,
    inited: (status) => status.app.inited
}

export default getters
