'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actions = require('./../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducerWeather = function reducerWeather() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_WEATHER:
            return [action.payload.data].concat((0, _toConsumableArray3.default)(state));
        default:
            return state;
    }
};

exports.default = reducerWeather;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxyZWR1Y2VyX3dlYXRoZXIuanMiXSwibmFtZXMiOlsiRkVUQ0hfV0VBVEhFUiIsInJlZHVjZXJXZWF0aGVyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVQsQUFBOEIsQUFBOUI7Ozs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixBQUFpQixpQkFBd0I7UUFBdkIsQUFBdUIsNEVBQWYsQUFBZTtRQUFYLEFBQVcsbUJBQzNDOztZQUFRLE9BQU8sQUFBZixBQUNJO0FBQUssQUFBTCxBQUNBO29CQUFRLE9BQU8sQUFBUCxRQUFlLEFBQXZCLDhDQUFnQyxBQUFoQyxBQUNBO0FBQVM7bUJBQU8sQUFBUCxBQUhiLEFBS0g7O0FBTkQsQUFRQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJyZWR1Y2VyX3dlYXRoZXIuanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==