import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
const app = createApp(App)

//挂载axios
app.config.globalProperties.$axios = axios

app.mount('#app')
