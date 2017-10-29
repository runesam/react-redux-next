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
        warning = _ref$meta.warning,
        invalid = _ref$meta.invalid;

    var CustomTag = element;
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('div', { className: 'form-group ' + (touched && invalid ? 'has-danger' : ''), __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZvcm1fZmllbGQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtRmVpbGQiLCJsYWJlbCIsImVsZW1lbnQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm1ldGEiLCJ0b3VjaGVkIiwiZXJyb3IiLCJ3YXJuaW5nIiwiaW52YWxpZCIsIkN1c3RvbVRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sWUFBWSxTQUFaLEFBQVksZ0JBT1o7UUFORixBQU1FLGFBTkYsQUFNRTtRQUxGLEFBS0UsZUFMRixBQUtFO1FBSkYsQUFJRSxhQUpGLEFBSUU7UUFIRixBQUdFLG1CQUhGLEFBR0U7UUFGRixBQUVFLFlBRkYsQUFFRTt5QkFERixBQUNFO1FBRE0sQUFDTixvQkFETSxBQUNOO1FBRGUsQUFDZixrQkFEZSxBQUNmO1FBRHNCLEFBQ3RCLG9CQURzQixBQUN0QjtRQUQrQixBQUMvQixvQkFEK0IsQUFDL0IsQUFDRjs7UUFBTSxZQUFOLEFBQWtCLEFBQ2xCOzJCQUNJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQSxTQUFLLDRCQUF5QixXQUFBLEFBQVcsVUFBWCxBQUFxQixlQUFuRCxBQUFLLEFBQTZEO3NCQUFsRTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsT0FESixBQUNJLEFBQ0Esc0NBQUEsQUFBQyxzQ0FBRCxBQUFlLFNBQU8sYUFBdEIsQUFBbUMsYUFBYSxNQUFNLFFBQXRELEFBQThELElBQUksV0FBbEUsQUFBNEU7c0JBQTVFO3dCQUZKLEFBRUksQUFDQztBQUREOzhDQUN1QixjQUFBOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSxLQUFBLEVBQVYsQUFBVSxNQUFULElBQW1DLDJCQUFXLGNBQUE7O3NCQUFBO3dCQUFBLEFBQU87QUFBUDtBQUFBLEtBQUEsRUFMeEUsQUFDSSxBQUNJLEFBR0ssQUFBMkQsQUFJM0U7QUFsQkQsQUFvQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZm9ybV9maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9