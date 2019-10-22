"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../config/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request_data = {
  platform: "weapp"
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { method: 'GET', data: {}, taro_env: true };

  // 添加header wxsid-sessionid
  var wxsid = _index2.default.getStorageSync('wxsid-sessionid', '');
  var header = options.header || { 'Content-Type': 'application/json;charset=utf-8' };
  var headers = Object.assign(header, { 'wxsid-sessionid': wxsid });

  return _index2.default.request({
    url: (options.host || _index3.baseUrl) + options.url,
    data: options.taro_env ? _extends({}, request_data, options.data) : _extends({}, options.data),
    header: headers || {
      'Content-Type': 'application/json;charset=utf-8'
    },
    method: options.method.toUpperCase()
  }).then(function (res) {
    var statusCode = res.statusCode,
        data = res.data;

    var wxinfo = 'wxinfo-sessionid';
    var wxsidRewrite = res.header[wxinfo] || '';
    if (wxsidRewrite !== wxsid && wxsidRewrite) {
      _index2.default.setStorageSync('wxsid-sessionid', wxsidRewrite);
    }
    if (statusCode >= 200 && statusCode < 300) {
      return data;
    }
    if (statusCode === 403) {
      // 登录失效后清除登录缓存
      _index2.default.setStorageSync('user_info', {});
    } else {
      throw new Error("\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF\uFF0C\u72B6\u6001\u7801" + statusCode);
    }
  }).catch(function (e) {
    console.log('e', e);
  });
};