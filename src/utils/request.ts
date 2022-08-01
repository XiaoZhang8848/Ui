import { TOKEN } from '@/consts';
import router from '@/router';
import authStore from '@/store/auth';
import { isTimeOut } from '@/utils/auth';
import { getItem } from '@/utils/storage';
import axios from 'axios';
import { ElMessage } from 'element-plus';

const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: import.meta.env.TIME_OUT
});

// 请求拦截器
service.interceptors.request.use(
  (request) => {
    const token = getItem(TOKEN);
    if (token) {
      if (isTimeOut()) {
        // 请求后端接口刷新Token
      }
      request.headers!.authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { status, data, msg } = response.data;
    if (status) {
      ElMessage.success(msg);
      return data;
    } else {
      ElMessage.error(msg);
    }
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        const store = authStore();
        store.logout();
        ElMessage.error('请重新登录');
        break;
      case 403:
        router.push('/403');
        break;
      case 404:
        ElMessage.error('数据不存在');
        break;
      case 405:
        ElMessage.error('请求方式错误');
        break;
      case 408:
        ElMessage.error('请求超时,请重试');
        break;
      case 429:
        ElMessage.error('请求频繁,请稍后再试');
        break;
      case 500:
        ElMessage.error('服务器错误');
        break;
    }
    return Promise.reject(error);
  }
);

export default service;
