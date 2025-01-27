import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/'
import App from './App.vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Fonts
import '@fontsource/poppins'
import '@fontsource/poppins/400-italic.css'
import '@fontsource/poppins/700.css'

import '@fontsource/merriweather'

// Custom CSS
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
