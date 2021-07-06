import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
console.log('---> ' +process.env.VUE_APP_API_URL);
