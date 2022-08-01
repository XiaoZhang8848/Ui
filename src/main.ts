import { createApp } from 'vue';
import App from './App.vue';

import installElementPlus from '@/plugins/element-plus';
import installPinia from '@/plugins/pinia';
import installRouter from '@/plugins/router';

import '@/styles/index.scss';
const app = createApp(App);

installElementPlus(app);
installPinia(app);
installRouter(app);

app.mount('#app');
