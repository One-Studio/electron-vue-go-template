import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import './index.css'
// import axios from 'axios'

const app = createApp(App)

//挂载axios
// app.config.globalProperties.$axios = axios

app.use(router)
app.mount('#app')
