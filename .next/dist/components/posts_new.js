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

var _reduxForm = require('redux-form');

var _index = require('../actions/index');

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