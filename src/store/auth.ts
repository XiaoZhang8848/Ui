import { clearItem } from '@/utils/storage';
import { defineStore } from 'pinia';

export default defineStore('auth', {
  state: () => ({}),
  actions: {
    // 退出
    logout() {
      // router.replace(''); 跳转登录界面
      clearItem(); // 清空localStorage
    }
  },
  getters: {}
});
