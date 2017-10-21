'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer_books = require('./reducer_books');

var _reducer_books2 = _interopRequireDefault(_reducer_books);

var _reducer_active_book = require('./reducer_active_book');

var _reducer_active_book2 = _interopRequireDefault(_reducer_active_book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  books: _reducer_books2.default,
  activeBook: _reducer_active_book2.default
});

exports.default = rootReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJCb29rc1JlZHVjZXIiLCJBY3RpdmVCb29rc1JlZHVjZXIiLCJyb290UmVkdWNlciIsImJvb2tzIiwiYWN0aXZlQm9vayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBd0I7Ozs7OztBQUUvQixJQUFNO0FBQThCLEFBQzNCLEFBQ1A7QUFGRixBQUFvQixBQUFnQixBQUV0QixBQUdkO0FBTG9DLEFBQ2xDLENBRGtCOztrQkFLcEIsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9