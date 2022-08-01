import router from '@/router/index';
import '@/router/persistence';
import { App } from 'vue';

export default function (app: App<Element>) {
  app.use(router);
}
