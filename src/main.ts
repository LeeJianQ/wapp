import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// @ts-ignore
import VConsole from 'vconsole/dist/vconsole.min'
import './styles/init.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

let vConsole = new VConsole()