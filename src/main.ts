import { createApp } from 'vue'
import './styles/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import initializeRouter from './router'

const app = createApp(App)

app.use(VueQueryPlugin)

initializeRouter(app)

app.mount('#app')
