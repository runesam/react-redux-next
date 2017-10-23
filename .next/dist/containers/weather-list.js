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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\containers\\weather-list.js';


var WeatherList = function (_Component) {
    (0, _inherits3.default)(WeatherList, _Component);

    function WeatherList() {
        (0, _classCallCheck3.default)(this, WeatherList);

        return (0, _possibleConstructorReturn3.default)(this, (WeatherList.__proto__ || (0, _getPrototypeOf2.default)(WeatherList)).apply(this, arguments));
    }

    (0, _createClass3.default)(WeatherList, [{
        key: 'renderCityRow',
        value: function renderCityRow() {
            if (!this.props.weather) {
                return _react2.default.createElement('tr', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                }, 'No Cities To Show Yet!');
            }

            return this.props.weather.map(function (value, key) {
                return _react2.default.createElement('tr', { key: key, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                }, _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                }, value.city.name));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('table', { className: 'table table-hover', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('thead', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, 'City'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, 'Temp'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Pressure'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, 'Humidity'))), _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, this.renderCityRow()));
        }
    }]);

    return WeatherList;
}(_react.Component);

function mapStateToProps(_ref) {
    var weather = _ref.weather;

    return { weather: weather };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WeatherList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXHdlYXRoZXItbGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJXZWF0aGVyTGlzdCIsInByb3BzIiwid2VhdGhlciIsIm1hcCIsInZhbHVlIiwia2V5IiwiY2l0eSIsIm5hbWUiLCJyZW5kZXJDaXR5Um93IiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOzs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7d0NBQ2MsQUFDWjtnQkFBSSxDQUFDLEtBQUEsQUFBSyxNQUFWLEFBQWdCLFNBQVMsQUFDckI7dUNBQU8sY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLGlCQUFBLEVBQVAsQUFBTyxBQUNWO0FBRUQ7O3dCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsSUFBSSxVQUFBLEFBQUMsT0FBRCxBQUFRLEtBQVI7dUNBQzFCLGNBQUEsUUFBSSxLQUFKLEFBQVM7a0NBQVQ7b0NBQUEsQUFDSTtBQURKO2lCQUFBLGtCQUNJLGNBQUE7O2tDQUFBO29DQUFBLEFBQUs7QUFBTDtBQUFBLHlCQUFLLEFBQU0sS0FGVyxBQUMxQixBQUNJLEFBQWdCO0FBRnhCLEFBQU8sQUFLVixhQUxVOzs7O2lDQU1GLEFBQ0w7bUNBQ0ksY0FBQSxXQUFPLFdBQVAsQUFBaUI7OEJBQWpCO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EseUJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEosQUFHSSxBQUNBLDZCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQU5aLEFBQ0ksQUFDSSxBQUlJLEFBR1IsK0JBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBVlIsQUFDSSxBQVNJLEFBQ0ssQUFBSyxBQUlyQjs7Ozs7QUE1QnFCLEE7O0FBK0IxQixTQUFBLEFBQVMsc0JBQTZCO1FBQVgsQUFBVyxlQUFYLEFBQVcsQUFDbEM7O1dBQU8sRUFBRSxTQUFULEFBQU8sQUFDVjtBQUVEOztrQkFBZSx5QkFBQSxBQUFRLGlCQUF2QixBQUFlLEFBQXlCIiwiZmlsZSI6IndlYXRoZXItbGlzdC5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9