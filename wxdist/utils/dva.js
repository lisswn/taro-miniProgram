"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../npm/dva-core/dist/index.js");

var _index4 = require("../npm/dva-loading/lib/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = void 0,
    store = void 0;

function createApp(options) {
  app = (0, _index3.create)(options);
  app.use((0, _index5.default)({}));

  // 适配支付宝小程序
  if (_index2.default.getEnv() === _index2.default.ENV_TYPE.ALIPAY) {
    global = {};
  }

  if (!global.registered) options.models.forEach(function (model) {
    return app.model(model);
  });

  global.registered = true;

  app.start();
  store = app._store;
  app.getStore = function () {
    return store;
  };
  app.dispatch = store.dispatch;
  return app;
}

exports.default = {
  createApp: createApp,
  getDispatch: function getDispatch() {
    return app.dispatch;
  }
};