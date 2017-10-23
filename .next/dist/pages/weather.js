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

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _weather = require('../styles/weather.scss');

var _weather2 = _interopRequireDefault(_weather);

var _head = require('./../components/head');

var _head2 = _interopRequireDefault(_head);

var _searchBar = require('./../containers/search-bar');

var _searchBar2 = _interopRequireDefault(_searchBar);

var _weatherList = require('./../containers/weather-list');

var _weatherList2 = _interopRequireDefault(_weatherList);

var _reducers = require('./../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\pages\\weather.js?entry';


var WeatherApp = function (_Component) {
    (0, _inherits3.default)(WeatherApp, _Component);

    function WeatherApp() {
        (0, _classCallCheck3.default)(this, WeatherApp);

        return (0, _possibleConstructorReturn3.default)(this, (WeatherApp.__proto__ || (0, _getPrototypeOf2.default)(WeatherApp)).apply(this, arguments));
    }

    (0, _createClass3.default)(WeatherApp, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.store = (0, _redux.applyMiddleware)(_reduxPromise2.default)(_redux.createStore);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactRedux.Provider, { store: this.store(_reducers2.default), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('div', { className: 'weather-app', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _weather2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement(_searchBar2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement(_weatherList2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            })));
        }
    }]);

    return WeatherApp;
}(_react.Component);

exports.default = WeatherApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx3ZWF0aGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvdmlkZXIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsIlJlY3V4UHJvbWlzZSIsInN0eWxlc2hlZXQiLCJIZWFkZXIiLCJTZWFyY2hCYXIiLCJXZWF0aGVyTGlzdCIsInJlZHVjZXIiLCJXZWF0aGVyQXBwIiwic3RvcmUiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUyxBQUFhOztBQUN0QixBQUFPOzs7O0FBRVAsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBTyxBQUFhOzs7Ozs7Ozs7SUFFZCxBOzs7Ozs7Ozs7Ozs2Q0FDbUIsQUFDakI7aUJBQUEsQUFBSyxRQUFMLEFBQWEsQUFBZ0IsQUFBYyxBQUM5Qzs7OztpQ0FDUSxBQUNMO21DQUNJLEFBQUMsc0NBQVMsT0FBTyxLQUFqQixBQUFpQixBQUFLLEFBQU07OEJBQTVCO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQURKLEFBQ0ksQUFDQTtBQURBO0FBQUEseURBQ08seUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTs4QkFBMUM7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQzs7OEJBQUQ7Z0NBSEosQUFHSSxBQUNBO0FBREE7QUFBQTs7OEJBQ0E7Z0NBSkosQUFJSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDOzs4QkFBRDtnQ0FQWixBQUNJLEFBQ0ksQUFLSSxBQUlmO0FBSmU7QUFBQTs7Ozs7QUFaSyxBLEFBbUJ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWF0aGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9yZWFjdC1yZWR1eC1uZXh0In0=