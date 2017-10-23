webpackHotUpdate(5,{

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(407);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\workspace\\react-redux-next\\containers\\weather-list.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\workspace\\react-redux-next\\containers\\weather-list.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wYmQ1YjczZmRmMTAwZmY1MWE1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy93ZWF0aGVyLWxpc3QuanM/MjQ5YTA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgV2VhdGhlckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyQ2l0eVJvdygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMud2VhdGhlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gPHRyPk5vIENpdGllcyBUbyBTaG93IFlldCE8L3RyPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLndlYXRoZXIubWFwKCh2YWx1ZSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3ZhbHVlLmNpdHkubmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLWhvdmVyJz5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJlc3N1cmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+SHVtaWRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNpdHlSb3coKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgd2VhdGhlciB9KSB7XHJcbiAgICByZXR1cm4geyB3ZWF0aGVyIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShXZWF0aGVyTGlzdCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvd2VhdGhlci1saXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7O0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==