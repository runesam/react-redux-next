'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\components\\form_field.js';


var FormFeild = function FormFeild(_ref) {
    var label = _ref.label,
        element = _ref.element,
        input = _ref.input,
        placeholder = _ref.placeholder,
        type = _ref.type,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error,
        warning = _ref$meta.warning;

    var CustomTag = element;
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('div', { className: 'form-group', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('h5', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, label), _react2.default.createElement(CustomTag, (0, _extends3.default)({}, input, { placeholder: placeholder, type: type || '', className: 'form-control', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    })), touched && (error && _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, error) || warning && _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, warning))));
};

exports.default = FormFeild;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZvcm1fZmllbGQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtRmVpbGQiLCJsYWJlbCIsImVsZW1lbnQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm1ldGEiLCJ0b3VjaGVkIiwiZXJyb3IiLCJ3YXJuaW5nIiwiQ3VzdG9tVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxZQUFZLFNBQVosQUFBWSxnQkFPWjtRQU5GLEFBTUUsYUFORixBQU1FO1FBTEYsQUFLRSxlQUxGLEFBS0U7UUFKRixBQUlFLGFBSkYsQUFJRTtRQUhGLEFBR0UsbUJBSEYsQUFHRTtRQUZGLEFBRUUsWUFGRixBQUVFO3lCQURGLEFBQ0U7UUFETSxBQUNOLG9CQURNLEFBQ047UUFEZSxBQUNmLGtCQURlLEFBQ2Y7UUFEc0IsQUFDdEIsb0JBRHNCLEFBQ3RCLEFBQ0Y7O1FBQU0sWUFBTixBQUFrQixBQUNsQjsyQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLE9BREosQUFDSSxBQUNBLHNDQUFBLEFBQUMsc0NBQUQsQUFBZSxTQUFPLGFBQXRCLEFBQW1DLGFBQWEsTUFBTSxRQUF0RCxBQUE4RCxJQUFJLFdBQWxFLEFBQTRFO3NCQUE1RTt3QkFGSixBQUVJLEFBQ0M7QUFERDs4Q0FDdUIsY0FBQTs7c0JBQUE7d0JBQUEsQUFBTztBQUFQO0FBQUEsS0FBQSxFQUFWLEFBQVUsTUFBVCxJQUFtQywyQkFBVyxjQUFBOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSxLQUFBLEVBTHhFLEFBQ0ksQUFDSSxBQUdLLEFBQTJELEFBSTNFO0FBbEJELEFBb0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImZvcm1fZmllbGQuanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==