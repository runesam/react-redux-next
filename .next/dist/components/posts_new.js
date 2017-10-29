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

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _index3 = require('../actions/index');

var _form_field = require('./form_field');

var _form_field2 = _interopRequireDefault(_form_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\components\\posts_new.js';


var PostsNew = function (_Component) {
    (0, _inherits3.default)(PostsNew, _Component);

    function PostsNew() {
        (0, _classCallCheck3.default)(this, PostsNew);

        return (0, _possibleConstructorReturn3.default)(this, (PostsNew.__proto__ || (0, _getPrototypeOf2.default)(PostsNew)).apply(this, arguments));
    }

    (0, _createClass3.default)(PostsNew, [{
        key: 'onSubmit',
        value: function onSubmit(props) {
            this.props.createPost(props).then(function (response) {
                if (response.payload.status === 201) {
                    return _index2.default.push('/blogger');
                }
                console.log(response);
            }).catch(function (reason) {
                return console.log(reason);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                fields = _props.fields,
                handleSubmit = _props.handleSubmit;

            return _react2.default.createElement('form', { onSubmit: handleSubmit(this.onSubmit.bind(this)), className: 'new-post', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Create A new Post'), _react2.default.createElement(_reduxForm.Field, { name: fields[0], type: 'text', component: _form_field2.default, label: fields[0], element: 'input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement(_reduxForm.Field, { name: fields[1], type: 'text', component: _form_field2.default, label: fields[1], element: 'input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement(_reduxForm.Field, { name: fields[2], component: _form_field2.default, label: fields[2], element: 'textarea', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('button', { type: 'submit', className: 'btn btn-primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Submit'), _react2.default.createElement(_link2.default, { prefetch: true, href: { pathname: '/blogger' }, as: '/blogger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('a', { className: 'btn btn-danger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Cancel')));
        }
    }]);

    return PostsNew;
}(_react.Component);

var fields = ['title', 'categories', 'content'];
function validate(values) {
    var errors = {};
    fields.forEach(function (field) {
        if (!values[field]) {
            errors[field] = 'This Field is Required';
        }
    });
    return errors;
}

exports.default = (0, _reactRedux.connect)(null, { createPost: _index3.createPost })((0, _reduxForm.reduxForm)({ form: 'PostNew', fields: fields, validate: validate })(PostsNew));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBvc3RzX25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJyZWR1eEZvcm0iLCJGaWVsZCIsIlJvdXRlciIsIkxpbmsiLCJjcmVhdGVQb3N0IiwiRm9ybUZlaWxkIiwiUG9zdHNOZXciLCJwcm9wcyIsInRoZW4iLCJyZXNwb25zZSIsInBheWxvYWQiLCJzdGF0dXMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwicmVhc29uIiwiZmllbGRzIiwiaGFuZGxlU3VibWl0Iiwib25TdWJtaXQiLCJiaW5kIiwicGF0aG5hbWUiLCJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsImZvckVhY2giLCJmaWVsZCIsImZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUyxBQUFXOztBQUNwQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQVMsQUFBa0I7O0FBQzNCLEFBQU8sQUFBZTs7Ozs7Ozs7O0lBRWhCLEE7Ozs7Ozs7Ozs7O2lDLEFBQ08sT0FBTyxBQUNaO2lCQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsT0FBdEIsQUFBNkIsS0FBSyxvQkFBWSxBQUMxQztvQkFBSSxTQUFBLEFBQVMsUUFBVCxBQUFpQixXQUFyQixBQUFnQyxLQUFLLEFBQ2pDOzJCQUFPLGdCQUFBLEFBQU8sS0FBZCxBQUFPLEFBQVksQUFDdEI7QUFDRDt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNmO0FBTEQsZUFBQSxBQUtHLE1BQU0sa0JBQUE7dUJBQVUsUUFBQSxBQUFRLElBQWxCLEFBQVUsQUFBWTtBQUwvQixBQU1IOzs7O2lDQUNRO3lCQUM0QixLQUQ1QixBQUNpQztnQkFEakMsQUFDRyxnQkFESCxBQUNHO2dCQURILEFBQ1csc0JBRFgsQUFDVyxBQUNoQjs7bUNBQ0ksY0FBQSxVQUFNLFVBQVUsYUFBYSxLQUFBLEFBQUssU0FBTCxBQUFjLEtBQTNDLEFBQWdCLEFBQWEsQUFBbUIsUUFBUSxXQUF4RCxBQUFrRTs4QkFBbEU7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNDQUFBLEFBQUMsa0NBQU0sTUFBTSxPQUFiLEFBQWEsQUFBTyxJQUFJLE1BQXhCLEFBQTZCLFFBQTdCLEFBQW9DLEFBQVcsaUNBQVcsT0FBTyxPQUFqRSxBQUFpRSxBQUFPLElBQUksU0FBNUUsQUFBb0Y7OEJBQXBGO2dDQUZKLEFBRUksQUFDQTtBQURBO2dDQUNBLEFBQUMsa0NBQU0sTUFBTSxPQUFiLEFBQWEsQUFBTyxJQUFJLE1BQXhCLEFBQTZCLFFBQTdCLEFBQW9DLEFBQVcsaUNBQVcsT0FBTyxPQUFqRSxBQUFpRSxBQUFPLElBQUksU0FBNUUsQUFBb0Y7OEJBQXBGO2dDQUhKLEFBR0ksQUFDQTtBQURBO2dDQUNBLEFBQUMsa0NBQU0sTUFBTSxPQUFiLEFBQWEsQUFBTyxJQUFwQixBQUF3QixBQUFXLGlDQUFXLE9BQU8sT0FBckQsQUFBcUQsQUFBTyxJQUFJLFNBQWhFLEFBQXdFOzhCQUF4RTtnQ0FKSixBQUlJLEFBQ0E7QUFEQTs7OzhCQUNBO2dDQUxKLEFBS0ksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDOzhCQUFoQztnQ0FBQTtBQUFBO2VBTkosQUFNSSxBQUNBLDJCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQU0sRUFBRSxVQUF2QixBQUFxQixBQUFZLGNBQWMsSUFBL0MsQUFBa0Q7OEJBQWxEO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFUWixBQUNJLEFBT0ksQUFDSSxBQUlmOzs7OztBQXhCa0IsQTs7QUEyQnZCLElBQU0sU0FBUyxDQUFBLEFBQUMsU0FBRCxBQUFVLGNBQXpCLEFBQWUsQUFBd0I7QUFDdkMsU0FBQSxBQUFTLFNBQVQsQUFBa0IsUUFBUSxBQUN0QjtRQUFNLFNBQU4sQUFBZSxBQUNmO1dBQUEsQUFBTyxRQUFRLGlCQUFTLEFBQ3BCO1lBQUksQ0FBQyxPQUFMLEFBQUssQUFBTyxRQUFRLEFBQ2hCO21CQUFBLEFBQU8sU0FBUCxBQUFnQixBQUNuQjtBQUNKO0FBSkQsQUFLQTtXQUFBLEFBQU8sQUFDVjtBQUVEOztrQkFBZSx5QkFBQSxBQUFRLE1BQU0sRUFBZCxBQUFjLEFBQUUsa0NBQWMsMEJBQVUsRUFBRSxNQUFGLEFBQVEsV0FBVyxRQUFuQixRQUEyQixVQUFyQyxBQUFVLFlBQXZELEFBQWUsQUFBOEIsQUFBaUQiLCJmaWxlIjoicG9zdHNfbmV3LmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9yZWFjdC1yZWR1eC1uZXh0In0=