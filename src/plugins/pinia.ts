import { createPinia } from 'pinia';
import { App } from 'vue';

export default function (app: App<Element>) {
  app.use(createPinia());
}
