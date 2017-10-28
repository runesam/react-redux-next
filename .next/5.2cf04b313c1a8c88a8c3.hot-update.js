webpackHotUpdate(5,{

/***/ 490:
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

var _reactRedux = __webpack_require__(400);

var _reduxForm = __webpack_require__(555);

var _index = __webpack_require__(398);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\components\\posts_new.js';


var PostsNew = function (_Component) {
    (0, _inherits3.default)(PostsNew, _Component);

    function PostsNew() {
        (0, _classCallCheck3.default)(this, PostsNew);

        return (0, _possibleConstructorReturn3.default)(this, (PostsNew.__proto__ || (0, _getPrototypeOf2.default)(PostsNew)).apply(this, arguments));
    }

    (0, _createClass3.default)(PostsNew, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                fields = _props.fields,
                handleSubmit = _props.handleSubmit;

            return _react2.default.createElement('form', { onSubmit: handleSubmit(this.props.createPost), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, 'Create A new Post'), _react2.default.createElement('div', { className: 'form-froup', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, 'Title'), _react2.default.createElement(_reduxForm.Field, { name: fields[0], component: 'input', type: 'text', className: 'form-control', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            })), _react2.default.createElement('div', { className: 'form-froup', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, 'categories'), _react2.default.createElement(_reduxForm.Field, { name: fields[1], component: 'input', type: 'text', className: 'form-control', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            })), _react2.default.createElement('div', { className: 'form-froup', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, 'content'), _react2.default.createElement(_reduxForm.Field, { name: fields[2], component: 'textarea', type: 'text', className: 'form-control', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            })), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement('button', { type: 'submit', className: 'btn btn-primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Submit'));
        }
    }]);

    return PostsNew;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, { createPost: _index.createPost })((0, _reduxForm.reduxForm)({ form: 'PostNew', fields: ['title', 'categories', 'content'] })(PostsNew));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBvc3RzX25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJyZWR1eEZvcm0iLCJGaWVsZCIsImNyZWF0ZVBvc3QiLCJQb3N0c05ldyIsInByb3BzIiwiZmllbGRzIiwiaGFuZGxlU3VibWl0IiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFTLEFBQVc7O0FBQ3BCLEFBQVMsQUFBa0I7Ozs7Ozs7SSxBQUVyQjs7Ozs7Ozs7Ozs7aUNBQ087eUJBQzRCLEtBRDVCLEFBQ2lDO2dCQURqQyxBQUNHLGdCQURILEFBQ0c7Z0JBREgsQUFDVyxzQkFEWCxBQUNXLEFBQ2hCOzttQ0FDSSxjQUFBLFVBQU0sVUFBVSxhQUFhLEtBQUEsQUFBSyxNQUFsQyxBQUFnQixBQUF3Qjs4QkFBeEM7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwwQkFBQSxBQUFDLGtDQUFNLE1BQU0sT0FBYixBQUFhLEFBQU8sSUFBSSxXQUF4QixBQUFrQyxTQUFRLE1BQTFDLEFBQStDLFFBQU8sV0FBdEQsQUFBZ0U7OEJBQWhFO2dDQUpSLEFBRUksQUFFSSxBQUVKO0FBRkk7aUNBRUosY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLCtCQUFBLEFBQUMsa0NBQU0sTUFBTSxPQUFiLEFBQWEsQUFBTyxJQUFJLFdBQXhCLEFBQWtDLFNBQVEsTUFBMUMsQUFBK0MsUUFBTyxXQUF0RCxBQUFnRTs4QkFBaEU7Z0NBUlIsQUFNSSxBQUVJLEFBRUo7QUFGSTtpQ0FFSixjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNEJBQUEsQUFBQyxrQ0FBTSxNQUFNLE9BQWIsQUFBYSxBQUFPLElBQUksV0FBeEIsQUFBa0MsWUFBVyxNQUE3QyxBQUFrRCxRQUFPLFdBQXpELEFBQW1FOzhCQUFuRTtnQ0FaUixBQVVJLEFBRUksQUFFSjtBQUZJOzs7OEJBRUo7Z0NBZEosQUFjSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0M7OEJBQWhDO2dDQUFBO0FBQUE7ZUFoQlIsQUFDSSxBQWVJLEFBR1g7Ozs7O0FBdEJrQixBLEFBeUJ2Qjs7a0JBQWUseUJBQUEsQUFBUSxNQUFNLEVBQWQsQUFBYyxBQUFFLGlDQUFjLDBCQUFVLEVBQUUsTUFBRixBQUFRLFdBQVcsUUFBUSxDQUFBLEFBQUMsU0FBRCxBQUFVLGNBQS9DLEFBQVUsQUFBMkIsQUFBd0IsY0FBMUcsQUFBZSxBQUE4QixBQUEyRSIsImZpbGUiOiJwb3N0c19uZXcuanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\workspace\\react-redux-next\\components\\posts_new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\workspace\\react-redux-next\\components\\posts_new.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yY2YwNGIzMTNjMWE4Yzg4YThjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0c19uZXcuanM/NTllMTkwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZWR1eEZvcm0sIEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcbmltcG9ydCB7IGNyZWF0ZVBvc3QgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbmNsYXNzIFBvc3RzTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGZpZWxkcywgaGFuZGxlU3VibWl0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodGhpcy5wcm9wcy5jcmVhdGVQb3N0KX0+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q3JlYXRlIEEgbmV3IFBvc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZnJvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5UaXRsZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9e2ZpZWxkc1swXX0gY29tcG9uZW50PSdpbnB1dCcgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWZyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+Y2F0ZWdvcmllczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9e2ZpZWxkc1sxXX0gY29tcG9uZW50PSdpbnB1dCcgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZnJvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5jb250ZW50PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT17ZmllbGRzWzJdfSBjb21wb25lbnQ9J3RleHRhcmVhJyB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSc+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgY3JlYXRlUG9zdCB9KShyZWR1eEZvcm0oeyBmb3JtOiAnUG9zdE5ldycsIGZpZWxkczogWyd0aXRsZScsICdjYXRlZ29yaWVzJywgJ2NvbnRlbnQnXSB9KShQb3N0c05ldykpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Bvc3RzX25ldy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBOzs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7O0FBR0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==