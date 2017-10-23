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

var _chart = require('./../components/chart');

var _chart2 = _interopRequireDefault(_chart);

var _google_map = require('./../components/google_map');

var _google_map2 = _interopRequireDefault(_google_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\containers\\weather-list.js';


var WeatherList = function (_Component) {
    (0, _inherits3.default)(WeatherList, _Component);

    function WeatherList() {
        (0, _classCallCheck3.default)(this, WeatherList);

        return (0, _possibleConstructorReturn3.default)(this, (WeatherList.__proto__ || (0, _getPrototypeOf2.default)(WeatherList)).apply(this, arguments));
    }

    (0, _createClass3.default)(WeatherList, [{
        key: 'renderProperties',
        value: function renderProperties(data) {
            console.log(data);
            return data.map(function (property, key) {
                return _react2.default.createElement('td', { key: key, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                }, _react2.default.createElement(_chart2.default, { data: property.data, color: property.color, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                }));
            });
        }
    }, {
        key: 'renderCityRow',
        value: function renderCityRow() {
            var _this2 = this;

            if (!this.props.weather) {
                return _react2.default.createElement('tr', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }, 'No Cities To Show Yet!');
            }
            return this.props.weather.map(function (value, key) {
                var Temp = {};
                Temp.data = value.list.map(function (item) {
                    return item.main.temp;
                });
                Temp.color = 'red';
                var Pressure = {};
                Pressure.data = value.list.map(function (item) {
                    return item.main.pressure;
                });
                Pressure.color = 'blue';
                var Humidity = {};
                Humidity.data = value.list.map(function (item) {
                    return item.main.humidity;
                });
                Humidity.color = 'green';
                var properties = [Temp, Pressure, Humidity];
                return _react2.default.createElement('tr', { key: key, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }, _react2.default.createElement(_google_map2.default, { lon: value.city.coord.lon, lat: value.city.coord.lat, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                })), _this2.renderProperties(properties));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('table', { className: 'table table-hover', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('thead', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'City'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Temp (k)'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Pressure (hPa)'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Humidity (%)'))), _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXHdlYXRoZXItbGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJDaGFydCIsIkdvb2dsZU1hcCIsIldlYXRoZXJMaXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwcm9wZXJ0eSIsImtleSIsImNvbG9yIiwicHJvcHMiLCJ3ZWF0aGVyIiwidmFsdWUiLCJUZW1wIiwibGlzdCIsIml0ZW0iLCJtYWluIiwidGVtcCIsIlByZXNzdXJlIiwicHJlc3N1cmUiLCJIdW1pZGl0eSIsImh1bWlkaXR5IiwicHJvcGVydGllcyIsImNpdHkiLCJjb29yZCIsImxvbiIsImxhdCIsInJlbmRlclByb3BlcnRpZXMiLCJyZW5kZXJDaXR5Um93IiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWU7Ozs7Ozs7OztJQUdoQixBOzs7Ozs7Ozs7Ozt5Q0FDZSxBLE1BQU0sQUFDbkI7b0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt3QkFBTyxBQUFLLElBQUksVUFBQSxBQUFDLFVBQUQsQUFBVyxLQUFYO3VDQUNaLGNBQUEsUUFBSSxLQUFKLEFBQVM7a0NBQVQ7b0NBQUEsQUFDSTtBQURKO2lCQUFBLGtCQUNJLEFBQUMsaUNBQU0sTUFBTSxTQUFiLEFBQXNCLE1BQU0sT0FBTyxTQUFuQyxBQUE0QztrQ0FBNUM7b0NBRlEsQUFDWixBQUNJO0FBQUE7O0FBRlIsQUFBTyxBQUtWLGFBTFU7Ozs7d0NBTUs7eUJBQ1o7O2dCQUFJLENBQUMsS0FBQSxBQUFLLE1BQVYsQUFBZ0IsU0FBUyxBQUNyQjt1Q0FBTyxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsaUJBQUEsRUFBUCxBQUFPLEFBQ1Y7QUFDRDt3QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLElBQUksVUFBQSxBQUFDLE9BQUQsQUFBUSxLQUFRLEFBQzFDO29CQUFNLE9BQU4sQUFBYSxBQUNiO3FCQUFBLEFBQUssYUFBTyxBQUFNLEtBQU4sQUFBVyxJQUFJLGdCQUFBOzJCQUFRLEtBQUEsQUFBSyxLQUFiLEFBQWtCO0FBQTdDLEFBQVksQUFDWixpQkFEWTtxQkFDWixBQUFLLFFBQUwsQUFBYSxBQUNiO29CQUFNLFdBQU4sQUFBaUIsQUFDakI7eUJBQUEsQUFBUyxhQUFPLEFBQU0sS0FBTixBQUFXLElBQUksZ0JBQUE7MkJBQVEsS0FBQSxBQUFLLEtBQWIsQUFBa0I7QUFBakQsQUFBZ0IsQUFDaEIsaUJBRGdCO3lCQUNoQixBQUFTLFFBQVQsQUFBaUIsQUFDakI7b0JBQU0sV0FBTixBQUFpQixBQUNqQjt5QkFBQSxBQUFTLGFBQU8sQUFBTSxLQUFOLEFBQVcsSUFBSSxnQkFBQTsyQkFBUSxLQUFBLEFBQUssS0FBYixBQUFrQjtBQUFqRCxBQUFnQixBQUNoQixpQkFEZ0I7eUJBQ2hCLEFBQVMsUUFBVCxBQUFpQixBQUNqQjtvQkFBTSxhQUFhLENBQUEsQUFBQyxNQUFELEFBQU8sVUFBMUIsQUFBbUIsQUFBaUIsQUFDcEM7dUNBQ0ksY0FBQSxRQUFJLEtBQUosQUFBUztrQ0FBVDtvQ0FBQSxBQUVJO0FBRko7aUJBQUEsa0JBRUksY0FBQTs7a0NBQUE7b0NBQUEsQUFDSTtBQURKO0FBQUEsbUNBQ0ksQUFBQyxzQ0FBVSxLQUFLLE1BQUEsQUFBTSxLQUFOLEFBQVcsTUFBM0IsQUFBaUMsS0FBSyxLQUFLLE1BQUEsQUFBTSxLQUFOLEFBQVcsTUFBdEQsQUFBNEQ7a0NBQTVEO29DQUhSLEFBRUksQUFDSSxBQUVIO0FBRkc7NEJBRUgsQUFBSyxpQkFOZCxBQUNJLEFBS0ssQUFBc0IsQUFHbEM7QUFwQkQsQUFBTyxBQXFCVixhQXJCVTs7OztpQ0FzQkYsQUFDTDttQ0FDSSxjQUFBLFdBQU8sV0FBUCxBQUFpQjs4QkFBakI7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSw2QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsbUNBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTlosQUFDSSxBQUNJLEFBSUksQUFHUixtQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFWUixBQUNJLEFBU0ksQUFDSyxBQUFLLEFBSXJCOzs7OztBQW5EcUIsQTs7QUFzRDFCLFNBQUEsQUFBUyxzQkFBNkI7UUFBWCxBQUFXLGVBQVgsQUFBVyxBQUNsQzs7V0FBTyxFQUFFLFNBQVQsQUFBTyxBQUNWO0FBRUQ7O2tCQUFlLHlCQUFBLEFBQVEsaUJBQXZCLEFBQWUsQUFBeUIiLCJmaWxlIjoid2VhdGhlci1saXN0LmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9yZWFjdC1yZWR1eC1uZXh0In0=