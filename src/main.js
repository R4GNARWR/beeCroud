import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/scss/global.scss'
import './assets/scss/style.scss'
import './assets/scss/main.scss'

createApp(App).use(router).mount('#app')
