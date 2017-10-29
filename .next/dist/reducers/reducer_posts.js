'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _index = require('../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
    all: [],
    post: null
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _index.FETCH_POSTS:
            return (0, _extends3.default)({}, state, { all: action.payload.data });
        default:
            return state;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxyZWR1Y2VyX3Bvc3RzLmpzIl0sIm5hbWVzIjpbIkZFVENIX1BPU1RTIiwiSU5JVElBTF9TVEFURSIsImFsbCIsInBvc3QiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBbUI7Ozs7QUFFNUIsSUFBTTtTQUFnQixBQUNiLEFBQ0w7VUFGSixBQUFzQixBQUVaLEFBR1Y7QUFMc0IsQUFDbEI7O2tCQUlXLFlBQW1DO1FBQWxDLEFBQWtDLDRFQUExQixBQUEwQjtRQUFYLEFBQVcsbUJBQzlDOztZQUFRLE9BQVIsQUFBZSxBQUNYO0FBQUEsQUFBSyxBQUNEOzhDQUFBLEFBQVksU0FBTyxLQUFLLE9BQUEsQUFBTyxRQUEvQixBQUF1QyxBQUMzQztBQUNJO21CQUpSLEFBSVEsQUFBTyxBQUVsQjs7QUFQRCIsImZpbGUiOiJyZWR1Y2VyX3Bvc3RzLmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9yZWFjdC1yZWR1eC1uZXh0In0=