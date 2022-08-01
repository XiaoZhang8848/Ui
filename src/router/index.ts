import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/403',
    component: () => import('@/components/error-page/403.vue')
  },
  {
    path: '/404',
    component: () => import('@/components/error-page/404.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
