import { TIME_STAMP, TOKEN_REFRESH_TIME } from '@/consts';
import { getItem, setItem } from './storage';

// 登录时间
export const setTimeStamp = () => {
  setItem(TIME_STAMP, Date.now());
};

// 是否超时
export function isTimeOut() {
  if (!getItem(TIME_STAMP)) {
    throw new Error('登录时间暂无配置');
  }
  return Date.now() > getItem(TIME_STAMP) + TOKEN_REFRESH_TIME;
}
