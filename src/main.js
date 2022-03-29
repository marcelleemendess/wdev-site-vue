//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router';


//Vue.config.productionTip = false


const app = createApp(App)
app.use(router)
app.mount('#app')

