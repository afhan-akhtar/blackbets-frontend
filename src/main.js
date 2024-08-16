import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import App from './App.vue'
import router from './router'

// Use import.meta.env to access environment variables in Vite
axios.defaults.baseURL = import.meta.env.VUE_APP_BACKEND_SERVER

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
