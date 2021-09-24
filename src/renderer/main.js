import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/main.css'
import './assets/css/index.css'
// import axios from 'axios'

const app = createApp(App)

//挂载axios
// app.config.globalProperties.$axios = axios

app.use(router)
    .use(store)
    .mount('#app')
