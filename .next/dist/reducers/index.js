'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer_books = require('./reducer_books');

var _reducer_books2 = _interopRequireDefault(_reducer_books);

var _reducer_active_book = require('./reducer_active_book');

var _reducer_active_book2 = _interopRequireDefault(_reducer_active_book);

var _reducer_weather = require('./reducer_weather');

var _reducer_weather2 = _interopRequireDefault(_reducer_weather);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  books: _reducer_books2.default,
  activeBook: _reducer_active_book2.default,
  weather: _reducer_weather2.default
});

exports.default = rootReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJCb29rc1JlZHVjZXIiLCJBY3RpdmVCb29rc1JlZHVjZXIiLCJXZWF0aGVyUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiYm9va3MiLCJhY3RpdmVCb29rIiwid2VhdGhlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBd0I7Ozs7QUFDL0IsQUFBTyxBQUFvQjs7Ozs7O0FBRTNCLElBQU07QUFBOEIsQUFDM0IsQUFDUDtBQUZrQyxBQUV0QixBQUNaO0FBSEYsQUFBb0IsQUFBZ0IsQUFHekIsQUFHWDtBQU5vQyxBQUNsQyxDQURrQjs7a0JBTXBCLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==