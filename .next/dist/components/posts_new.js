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

var _loader = require('./loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\components\\posts_new.js';


var PostsNew = function (_Component) {
    (0, _inherits3.default)(PostsNew, _Component);

    function PostsNew(props) {
        (0, _classCallCheck3.default)(this, PostsNew);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PostsNew.__proto__ || (0, _getPrototypeOf2.default)(PostsNew)).call(this, props));

        _this.state = {
            loading: false
        };
        return _this;
    }

    (0, _createClass3.default)(PostsNew, [{
        key: 'onSubmit',
        value: function onSubmit(props) {
            var _this2 = this;

            this.setState({ loading: true });
            this.props.createPost(props).then(function (response) {
                if (response.payload.status === 201) {
                    return _index2.default.push('/blogger');
                }
                console.log(response);
            }).catch(function (reason) {
                console.log(reason);
                _this2.setState({ loading: false });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                fields = _props.fields,
                handleSubmit = _props.handleSubmit;

            if (!this.state.loading) {
                return _react2.default.createElement('form', { onSubmit: handleSubmit(this.onSubmit.bind(this)), className: 'new-post', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }, 'Create A new Post'), _react2.default.createElement(_reduxForm.Field, { name: fields[0], type: 'text', component: _form_field2.default, label: fields[0], element: 'input', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                }), _react2.default.createElement(_reduxForm.Field, { name: fields[1], type: 'text', component: _form_field2.default, label: fields[1], element: 'input', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }), _react2.default.createElement(_reduxForm.Field, { name: fields[2], component: _form_field2.default, label: fields[2], element: 'textarea', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }), _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }), _react2.default.createElement('button', { type: 'submit', className: 'btn btn-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }, 'Submit'), _react2.default.createElement(_link2.default, { prefetch: true, href: { pathname: '/blogger' }, as: '/blogger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }, _react2.default.createElement('a', { className: 'btn btn-danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }, 'Cancel')));
            }
            return _react2.default.createElement(_loader2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBvc3RzX25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJyZWR1eEZvcm0iLCJGaWVsZCIsIlJvdXRlciIsIkxpbmsiLCJjcmVhdGVQb3N0IiwiRm9ybUZlaWxkIiwiTG9hZGVyIiwiUG9zdHNOZXciLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNldFN0YXRlIiwidGhlbiIsInJlc3BvbnNlIiwicGF5bG9hZCIsInN0YXR1cyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJyZWFzb24iLCJmaWVsZHMiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdCIsImJpbmQiLCJwYXRobmFtZSIsInZhbGlkYXRlIiwidmFsdWVzIiwiZXJyb3JzIiwiZm9yRWFjaCIsImZpZWxkIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFTLEFBQVc7O0FBQ3BCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBUyxBQUFrQjs7QUFDM0IsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFFYjtzQ0FDRjs7c0JBQUEsQUFBWSxPQUFPOzRDQUFBOzs4SUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSztxQkFGVSxBQUVmLEFBQWEsQUFDQTtBQURBLEFBQ1Q7ZUFFUDs7Ozs7aUMsQUFDUSxPQUFPO3lCQUNaOztpQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFoQixBQUFjLEFBQVcsQUFDekI7aUJBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixPQUF0QixBQUE2QixLQUFLLG9CQUFZLEFBQzFDO29CQUFJLFNBQUEsQUFBUyxRQUFULEFBQWlCLFdBQXJCLEFBQWdDLEtBQUssQUFDakM7MkJBQU8sZ0JBQUEsQUFBTyxLQUFkLEFBQU8sQUFBWSxBQUN0QjtBQUNEO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Y7QUFMRCxlQUFBLEFBS0csTUFBTSxrQkFBVSxBQUNmO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7dUJBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBQzVCO0FBUkQsQUFTSDs7OztpQ0FDUTt5QkFDNEIsS0FENUIsQUFDaUM7Z0JBRGpDLEFBQ0csZ0JBREgsQUFDRztnQkFESCxBQUNXLHNCQURYLEFBQ1csQUFDaEI7O2dCQUFJLENBQUMsS0FBQSxBQUFLLE1BQVYsQUFBZ0IsU0FBUyxBQUNyQjt1Q0FDSSxjQUFBLFVBQU0sVUFBVSxhQUFhLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBM0MsQUFBZ0IsQUFBYSxBQUFtQixRQUFRLFdBQXhELEFBQWtFO2tDQUFsRTtvQ0FBQSxBQUNJO0FBREo7aUJBQUEsa0JBQ0ksY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQURKLEFBQ0ksQUFDQSxzQ0FBQSxBQUFDLGtDQUFNLE1BQU0sT0FBYixBQUFhLEFBQU8sSUFBSSxNQUF4QixBQUE2QixRQUE3QixBQUFvQyxBQUFXLGlDQUFXLE9BQU8sT0FBakUsQUFBaUUsQUFBTyxJQUFJLFNBQTVFLEFBQW9GO2tDQUFwRjtvQ0FGSixBQUVJLEFBQ0E7QUFEQTtvQ0FDQSxBQUFDLGtDQUFNLE1BQU0sT0FBYixBQUFhLEFBQU8sSUFBSSxNQUF4QixBQUE2QixRQUE3QixBQUFvQyxBQUFXLGlDQUFXLE9BQU8sT0FBakUsQUFBaUUsQUFBTyxJQUFJLFNBQTVFLEFBQW9GO2tDQUFwRjtvQ0FISixBQUdJLEFBQ0E7QUFEQTtvQ0FDQSxBQUFDLGtDQUFNLE1BQU0sT0FBYixBQUFhLEFBQU8sSUFBcEIsQUFBd0IsQUFBVyxpQ0FBVyxPQUFPLE9BQXJELEFBQXFELEFBQU8sSUFBSSxTQUFoRSxBQUF3RTtrQ0FBeEU7b0NBSkosQUFJSSxBQUNBO0FBREE7OztrQ0FDQTtvQ0FMSixBQUtJLEFBQ0E7QUFEQTtBQUFBLG9DQUNBLGNBQUEsWUFBUSxNQUFSLEFBQWEsVUFBUyxXQUF0QixBQUFnQztrQ0FBaEM7b0NBQUE7QUFBQTttQkFOSixBQU1JLEFBQ0EsMkJBQUEsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBTSxFQUFFLFVBQXZCLEFBQXFCLEFBQVksY0FBYyxJQUEvQyxBQUFrRDtrQ0FBbEQ7b0NBQUEsQUFDSTtBQURKO21DQUNJLGNBQUEsT0FBRyxXQUFILEFBQWE7a0NBQWI7b0NBQUE7QUFBQTttQkFUWixBQUNJLEFBT0ksQUFDSSxBQUlmO0FBQ0Q7bUNBQU8sQUFBQzs7OEJBQUQ7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7QUFBQSxhQUFBOzs7OztBLEFBcENROztBQXdDdkIsSUFBTSxTQUFTLENBQUEsQUFBQyxTQUFELEFBQVUsY0FBekIsQUFBZSxBQUF3QjtBQUN2QyxTQUFBLEFBQVMsU0FBVCxBQUFrQixRQUFRLEFBQ3RCO1FBQU0sU0FBTixBQUFlLEFBQ2Y7V0FBQSxBQUFPLFFBQVEsaUJBQVMsQUFDcEI7WUFBSSxDQUFDLE9BQUwsQUFBSyxBQUFPLFFBQVEsQUFDaEI7bUJBQUEsQUFBTyxTQUFQLEFBQWdCLEFBQ25CO0FBQ0o7QUFKRCxBQUtBO1dBQUEsQUFBTyxBQUNWO0FBRUQ7O2tCQUFlLHlCQUFBLEFBQVEsTUFBTSxFQUFkLEFBQWMsQUFBRSxrQ0FBYywwQkFBVSxFQUFFLE1BQUYsQUFBUSxXQUFXLFFBQW5CLFFBQTJCLFVBQXJDLEFBQVUsWUFBdkQsQUFBZSxBQUE4QixBQUFpRCIsImZpbGUiOiJwb3N0c19uZXcuanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==