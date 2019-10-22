'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _service = require('./service.js');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'home',
  state: {
    homeInfo: {}
  },
  effects: {
    getHomeInfo: /*#__PURE__*/regeneratorRuntime.mark(function getHomeInfo(_ref, _ref2) {
      var payload = _ref.payload;
      var call = _ref2.call,
          put = _ref2.put;
      var res;
      return regeneratorRuntime.wrap(function getHomeInfo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return call(_service2.default.getHomeInfo, payload);

            case 3:
              res = _context.sent;

              if (!(res && res.success)) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return put({
                type: 'save',
                payload: {
                  homeInfo: res.data
                }
              });

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, getHomeInfo, this, [[0, 9]]);
    })
  },
  reducers: {
    save: function save(state, _ref3) {
      var payload = _ref3.payload;

      return _extends({}, state, payload);
    }
  }
};