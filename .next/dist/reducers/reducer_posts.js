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
        case _index.FETCH_POST:
            return (0, _extends3.default)({}, state, { post: action.payload.data });
        case _index.DELETE_POST:
            return (0, _extends3.default)({}, state, { post: null });
        default:
            return state;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxyZWR1Y2VyX3Bvc3RzLmpzIl0sIm5hbWVzIjpbIkZFVENIX1BPU1RTIiwiRkVUQ0hfUE9TVCIsIkRFTEVURV9QT1NUIiwiSU5JVElBTF9TVEFURSIsImFsbCIsInBvc3QiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBYSxBQUFZLEFBQW1COzs7O0FBRXJELElBQU07U0FBZ0IsQUFDYixBQUNMO1VBRkosQUFBc0IsQUFFWixBQUdWO0FBTHNCLEFBQ2xCOztrQkFJVyxZQUFtQztRQUFsQyxBQUFrQyw0RUFBMUIsQUFBMEI7UUFBWCxBQUFXLG1CQUM5Qzs7WUFBUSxPQUFSLEFBQWUsQUFDWDtBQUFBLEFBQUssQUFDRDs4Q0FBQSxBQUFZLFNBQU8sS0FBSyxPQUFBLEFBQU8sUUFBL0IsQUFBdUMsQUFDM0M7QUFBQSxBQUFLLEFBQ0Q7OENBQUEsQUFBWSxTQUFPLE1BQU0sT0FBQSxBQUFPLFFBQWhDLEFBQXdDLEFBQzVDO0FBQUEsQUFBSyxBQUNEOzhDQUFBLEFBQVksU0FBTyxNQUFuQixBQUF5QixBQUM3QjtBQUNJO21CQVJSLEFBUVEsQUFBTyxBQUVsQjs7QUFYRCIsImZpbGUiOiJyZWR1Y2VyX3Bvc3RzLmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9yZWFjdC1yZWR1eC1uZXh0In0=