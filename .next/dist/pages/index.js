'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _booksList = require('./../containers/books-list');

var _booksList2 = _interopRequireDefault(_booksList);

var _reducers = require('./../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\pages\\index.js?entry';


var Home = function (_Component) {
    (0, _inherits3.default)(Home, _Component);

    function Home() {
        (0, _classCallCheck3.default)(this, Home);

        return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
    }

    (0, _createClass3.default)(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.store = (0, _redux.createStore)(_reducers2.default);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'home_page', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), 'home page we are', _react2.default.createElement(_reactRedux.Provider, { store: this.store, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement(_booksList2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            })));
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3ZpZGVyIiwiY3JlYXRlU3RvcmUiLCJCb29rc0xpc3QiLCJyZWR1Y2VyIiwic3R5bGVzaGVldCIsIkhvbWUiLCJzdG9yZSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFTOztBQUVULEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWE7Ozs7QUFFcEIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7OzZDQUNtQixBQUNqQjtpQkFBQSxBQUFLLFFBQUwsQUFBYSxBQUFZLEFBQzVCOzs7O2lDQUNRLEFBQ0w7bUNBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNBO0FBREE7YUFBQSwyQ0FDTyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFROzhCQUExQztnQ0FEQSxBQUNBO0FBQUE7Z0JBRUksb0NBQUEsQUFBQyxzQ0FBUyxPQUFPLEtBQWpCLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsQUFBQzs7OEJBQUQ7Z0NBTEosQUFDQSxBQUdJLEFBQ0EsQUFJUDtBQUpPO0FBQUE7Ozs7O0FBVk8sQSxBQWdCbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==