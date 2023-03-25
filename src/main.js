import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import './assets/tailwind.css'
import router from '../routes';



const app = createApp(App);

app.use(router);

app.mount('#app');