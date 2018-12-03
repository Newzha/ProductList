/*
* 请求借口与后台进行数据交互
* */
import request from '../utils/request';

export function query() {
  return request('/api/users');
}
