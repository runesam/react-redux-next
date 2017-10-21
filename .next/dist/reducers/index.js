'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer_books = require('./reducer_books');

var _reducer_books2 = _interopRequireDefault(_reducer_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  books: _reducer_books2.default
});
exports.default = rootReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJCb29rc1JlZHVjZXIiLCJyb290UmVkdWNlciIsImJvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQU8sQUFBa0I7Ozs7OztBQUV6QixJQUFNO0FBQU4sQUFBb0IsQUFBZ0IsQUFDM0IsQUFFVDtBQUhvQyxBQUNsQyxDQURrQjtrQkFHcEIsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9