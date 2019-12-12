'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeInfo = undefined;

var _request = require('../../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHomeInfo = exports.getHomeInfo = function getHomeInfo(data) {
  return (0, _request2.default)({
    url: '/api/home/info',
    method: 'get',
    data: data
  });
};