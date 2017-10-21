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

var _bookDetail = require('./../containers/book-detail');

var _bookDetail2 = _interopRequireDefault(_bookDetail);

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
            return _react2.default.createElement(_reactRedux.Provider, { store: this.store, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('div', { className: 'home_page', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }), _react2.default.createElement(_booksList2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }), _react2.default.createElement(_bookDetail2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            })));
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3ZpZGVyIiwiY3JlYXRlU3RvcmUiLCJCb29rc0xpc3QiLCJCb29rRGV0YWlsIiwicmVkdWNlciIsInN0eWxlc2hlZXQiLCJIb21lIiwic3RvcmUiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUzs7QUFFVCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWE7Ozs7QUFFcEIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7OzZDQUNtQixBQUNqQjtpQkFBQSxBQUFLLFFBQUwsQUFBYSxBQUFZLEFBQzVCOzs7O2lDQUNRLEFBQ0w7bUNBQ0ksQUFBQyxzQ0FBUyxPQUFPLEtBQWpCLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjt3REFDVyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFROzhCQUExQztnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDOzs4QkFBRDtnQ0FGSixBQUVJLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLEFBQUM7OzhCQUFEO2dDQUxaLEFBQ0ksQUFDSSxBQUdJLEFBSWY7QUFKZTtBQUFBOzs7OztBQVZELEEsQUFnQm5COztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9yZWFjdC1yZWR1eC1uZXh0In0=