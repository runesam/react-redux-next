'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _reducer_books = require('./reducer_books');

var _reducer_books2 = _interopRequireDefault(_reducer_books);

var _reducer_active_book = require('./reducer_active_book');

var _reducer_active_book2 = _interopRequireDefault(_reducer_active_book);

var _reducer_weather = require('./reducer_weather');

var _reducer_weather2 = _interopRequireDefault(_reducer_weather);

var _reducer_posts = require('./reducer_posts');

var _reducer_posts2 = _interopRequireDefault(_reducer_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  books: _reducer_books2.default,
  activeBook: _reducer_active_book2.default,
  weather: _reducer_weather2.default,
  posts: _reducer_posts2.default,
  form: _reduxForm.reducer
});

exports.default = rootReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJyZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJCb29rc1JlZHVjZXIiLCJBY3RpdmVCb29rc1JlZHVjZXIiLCJXZWF0aGVyUmVkdWNlciIsIlBvc3RzUmVhZHVjZXIiLCJyb290UmVkdWNlciIsImJvb2tzIiwiYWN0aXZlQm9vayIsIndlYXRoZXIiLCJwb3N0cyIsImZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFXOztBQUVwQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBd0I7Ozs7QUFDL0IsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQW1COzs7Ozs7QUFFMUIsSUFBTTtBQUE4QixBQUMzQixBQUNQO0FBRmtDLEFBRXRCLEFBQ1o7QUFIa0MsQUFHekIsQUFDVDtBQUprQyxBQUkzQixBQUNQO0FBTEYsQUFBb0IsQUFBZ0IsQUFLNUIsQUFHUjtBQVJvQyxBQUNsQyxDQURrQjs7a0JBUXBCLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==