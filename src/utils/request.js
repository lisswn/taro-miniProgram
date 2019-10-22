import Taro from '@tarojs/taro';
import {baseUrl} from '../config';

const request_data = {
  platform: process.env.TARO_ENV
};

export default (options = {method: 'GET', data: {}, taro_env: true}) => {
  // 添加header wxsid-sessionid
  const wxsid = Taro.getStorageSync('wxsid-sessionid', '')
  let header = options.header || { 'Content-Type': 'application/json;charset=utf-8' }
  let headers =  Object.assign(header, {'wxsid-sessionid':wxsid})

  return Taro.request({
    url: (options.host || baseUrl) + options.url,
    data: options.taro_env ? {
      ...request_data,
      ...options.data
    } : {
      ...options.data
    },
    header: headers || {
      'Content-Type': 'application/json;charset=utf-8',
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    const {statusCode, data} = res;
    const wxinfo = 'wxinfo-sessionid'
    const wxsidRewrite = res.header[wxinfo] || '';
    if (wxsidRewrite !== wxsid && wxsidRewrite) {
      Taro.setStorageSync('wxsid-sessionid', wxsidRewrite);
    }
    if (statusCode >= 200 && statusCode < 300) {
      return data;
    }
    if (statusCode === 403) {  // 登录失效后清除登录缓存
      Taro.setStorageSync('user_info', {})
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  }).catch(e => {
    console.log('e', e)
  })
}
