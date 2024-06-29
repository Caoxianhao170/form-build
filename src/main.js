import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import { registerSW } from './registerSW.js';

registerSW();

const app = createApp(App);
// 如何创建模板
app.mount('#app');
