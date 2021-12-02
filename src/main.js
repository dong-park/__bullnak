import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'

const app = createApp(App);
app.use(router)
app.use(moment)
app.mount('#app')
