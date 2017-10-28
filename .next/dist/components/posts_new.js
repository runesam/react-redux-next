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
        key: 'render',
        value: function render() {
            var _props = this.props,
                fields = _props.fields,
                handleSubmit = _props.handleSubmit;

            return _react2.default.createElement('form', { onSubmit: handleSubmit(this.props.createPost), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, 'Create A new Post'), _react2.default.createElement(_reduxForm.Field, { name: fields[0], type: 'text', component: _form_field2.default, label: fields[0], element: 'input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement(_reduxForm.Field, { name: fields[1], type: 'text', component: _form_field2.default, label: fields[1], element: 'input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), _react2.default.createElement(_reduxForm.Field, { name: fields[2], component: _form_field2.default, label: fields[2], element: 'textarea', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement('button', { type: 'submit', className: 'btn btn-primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, 'Submit'));
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

exports.default = (0, _reactRedux.connect)(null, { createPost: _index.createPost })((0, _reduxForm.reduxForm)({ form: 'PostNew', fields: fields, validate: validate })(PostsNew));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBvc3RzX25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJyZWR1eEZvcm0iLCJGaWVsZCIsImNyZWF0ZVBvc3QiLCJGb3JtRmVpbGQiLCJQb3N0c05ldyIsInByb3BzIiwiZmllbGRzIiwiaGFuZGxlU3VibWl0IiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZmllbGQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVMsQUFBVzs7QUFFcEIsQUFBUyxBQUFrQjs7QUFDM0IsQUFBTyxBQUFlOzs7Ozs7Ozs7SSxBQUVoQjs7Ozs7Ozs7Ozs7aUNBQ087eUJBQzRCLEtBRDVCLEFBQ2lDO2dCQURqQyxBQUNHLGdCQURILEFBQ0c7Z0JBREgsQUFDVyxzQkFEWCxBQUNXLEFBQ2hCOzttQ0FDSSxjQUFBLFVBQU0sVUFBVSxhQUFhLEtBQUEsQUFBSyxNQUFsQyxBQUFnQixBQUF3Qjs4QkFBeEM7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNDQUFBLEFBQUMsa0NBQU0sTUFBTSxPQUFiLEFBQWEsQUFBTyxJQUFJLE1BQXhCLEFBQTZCLFFBQTdCLEFBQW9DLEFBQVcsaUNBQVcsT0FBTyxPQUFqRSxBQUFpRSxBQUFPLElBQUksU0FBNUUsQUFBb0Y7OEJBQXBGO2dDQUZKLEFBRUksQUFDQTtBQURBO2dDQUNBLEFBQUMsa0NBQU0sTUFBTSxPQUFiLEFBQWEsQUFBTyxJQUFJLE1BQXhCLEFBQTZCLFFBQTdCLEFBQW9DLEFBQVcsaUNBQVcsT0FBTyxPQUFqRSxBQUFpRSxBQUFPLElBQUksU0FBNUUsQUFBb0Y7OEJBQXBGO2dDQUhKLEFBR0ksQUFDQTtBQURBO2dDQUNBLEFBQUMsa0NBQU0sTUFBTSxPQUFiLEFBQWEsQUFBTyxJQUFwQixBQUF3QixBQUFXLGlDQUFXLE9BQU8sT0FBckQsQUFBcUQsQUFBTyxJQUFJLFNBQWhFLEFBQXdFOzhCQUF4RTtnQ0FKSixBQUlJLEFBQ0E7QUFEQTs7OzhCQUNBO2dDQUxKLEFBS0ksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDOzhCQUFoQztnQ0FBQTtBQUFBO2VBUFIsQUFDSSxBQU1JLEFBR1g7Ozs7O0FBYmtCLEE7O0FBZ0J2QixJQUFNLFNBQVMsQ0FBQSxBQUFDLFNBQUQsQUFBVSxjQUF6QixBQUFlLEFBQXdCO0FBQ3ZDLFNBQUEsQUFBUyxTQUFULEFBQWtCLFFBQVEsQUFDdEI7UUFBTSxTQUFOLEFBQWUsQUFDZjtXQUFBLEFBQU8sUUFBUSxpQkFBUyxBQUNwQjtZQUFJLENBQUMsT0FBTCxBQUFLLEFBQU8sUUFBUSxBQUNoQjttQkFBQSxBQUFPLFNBQVAsQUFBZ0IsQUFDbkI7QUFDSjtBQUpELEFBS0E7V0FBQSxBQUFPLEFBQ1Y7QUFFRDs7a0JBQWUseUJBQUEsQUFBUSxNQUFNLEVBQWQsQUFBYyxBQUFFLGlDQUFjLDBCQUFVLEVBQUUsTUFBRixBQUFRLFdBQVcsUUFBbkIsUUFBMkIsVUFBckMsQUFBVSxZQUF2RCxBQUFlLEFBQThCLEFBQWlEIiwiZmlsZSI6InBvc3RzX25ldy5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9