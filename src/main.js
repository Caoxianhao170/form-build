import { createApp } from 'vue'
import { setupAssets, setupBlocks, setupAntd } from './plugins/index.js';
import './style.css'
import App from './App.vue';
import { registerSW } from './registerSW.js';

const app = createApp(App);

function setupPlugins(App) {
  setupAntd(app);
  // 注册静态资源
  setupAssets();
  // 注册表单物料
  setupBlocks(App);
}
registerSW();

setupPlugins(app);

window.$vue = app;

// 如何创建模板
app.mount('#app');

