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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../actions/index');

var _loader = require('./loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\components\\post-detail.js';


var PostDetail = function (_Component) {
    (0, _inherits3.default)(PostDetail, _Component);

    function PostDetail() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PostDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostDetail.__proto__ || (0, _getPrototypeOf2.default)(PostDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            response: false,
            error: false
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PostDetail, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.props.fetchPost(this.props.id).then(function (response) {
                return _this2.updateStates(response);
            });
        }
    }, {
        key: 'updateStates',
        value: function updateStates(response) {
            if (!response.payload.status && response.payload.response.status === 404) {
                this.setState({ error: 404 });
                setTimeout(function () {
                    _index2.default.push('/blogger');
                }, 3000);
            }
            this.setState({ response: true });
        }
    }, {
        key: 'handleDeletePost',
        value: function handleDeletePost() {
            this.props.deletePost(this.props.id).then(function () {
                return _index2.default.push('/blogger');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.state.response || !this.props.post && !this.state.error) {
                return _react2.default.createElement(_loader2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                });
            } else if (this.state.error) {
                return _react2.default.createElement('h1', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }, this.state.error);
            }
            return _react2.default.createElement('div', { className: 'post-detail', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, this.props.post.title), _react2.default.createElement('h6', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, this.props.post.categories), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, this.props.post.content), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement(_link2.default, { prefetch: true, href: { pathname: '/blogger' }, as: '/blogger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('a', { className: 'btn btn-warning', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Back TO Posts List')), _react2.default.createElement('a', { className: 'btn btn-danger', onClick: this.handleDeletePost.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Delete This Post'));
        }
    }]);

    return PostDetail;
}(_react.Component);

function mapStateToProps(state) {
    return { post: state.posts.post };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPost: _index3.fetchPost, deletePost: _index3.deletePost })(PostDetail);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBvc3QtZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIkxpbmsiLCJSb3V0ZXIiLCJmZXRjaFBvc3QiLCJkZWxldGVQb3N0IiwiTG9hZGVyIiwiUG9zdERldGFpbCIsInN0YXRlIiwicmVzcG9uc2UiLCJlcnJvciIsInByb3BzIiwiaWQiLCJ0aGVuIiwidXBkYXRlU3RhdGVzIiwicGF5bG9hZCIsInN0YXR1cyIsInNldFN0YXRlIiwic2V0VGltZW91dCIsInB1c2giLCJwb3N0IiwidGl0bGUiLCJjYXRlZ29yaWVzIiwiY29udGVudCIsInBhdGhuYW1lIiwiaGFuZGxlRGVsZXRlUG9zdCIsImJpbmQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQVMsQUFBVyxBQUFrQjs7QUFFdEMsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozt3TixBQUNGO3NCQUFPLEFBQ08sQUFDVjttQkFGRyxBQUVJLEE7QUFGSixBQUNIOzs7Ozs2Q0FHaUI7eUJBQ2pCOztpQkFBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLEtBQUEsQUFBSyxNQUExQixBQUFnQyxJQUFoQyxBQUFvQyxLQUFLLFVBQUEsQUFBQyxVQUFEO3VCQUFjLE9BQUEsQUFBSyxhQUFuQixBQUFjLEFBQWtCO0FBQXpFLEFBQ0g7Ozs7cUNBQ1ksQSxVQUFVLEFBQ25CO2dCQUFJLENBQUMsU0FBQSxBQUFTLFFBQVYsQUFBa0IsVUFBVSxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixXQUExRCxBQUFxRSxLQUFLLEFBQ3RFO3FCQUFBLEFBQUssU0FBUyxFQUFFLE9BQWhCLEFBQWMsQUFBUyxBQUN2QjsyQkFBVyxZQUFNLEFBQ2I7b0NBQUEsQUFBTyxLQUFQLEFBQVksQUFDZjtBQUZELG1CQUFBLEFBRUcsQUFDTjtBQUNEO2lCQUFBLEFBQUssU0FBUyxFQUFFLFVBQWhCLEFBQWMsQUFBWSxBQUM3Qjs7OzsyQ0FDa0IsQUFDZjtpQkFBQSxBQUFLLE1BQUwsQUFBVyxXQUFXLEtBQUEsQUFBSyxNQUEzQixBQUFpQyxJQUFqQyxBQUFxQyxLQUFLLFlBQUE7dUJBQU0sZ0JBQUEsQUFBTyxLQUFiLEFBQU0sQUFBWTtBQUE1RCxBQUNIOzs7O2lDQUNRLEFBQ0w7Z0JBQUksQ0FBQyxLQUFBLEFBQUssTUFBTixBQUFZLFlBQWEsQ0FBQyxLQUFBLEFBQUssTUFBTixBQUFZLFFBQVEsQ0FBQyxLQUFBLEFBQUssTUFBdkQsQUFBNkQsT0FBUSxBQUNqRTt1Q0FBTyxBQUFDOztrQ0FBRDtvQ0FBUCxBQUFPLEFBQ1Y7QUFEVTtBQUFBLGlCQUFBO0FBRFgsbUJBRU8sSUFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLE9BQU8sQUFDekI7dUNBQU8sY0FBQTs7a0NBQUE7b0NBQUEsQUFBSztBQUFMO0FBQUEsaUJBQUEsT0FBSyxBQUFLLE1BQWpCLEFBQU8sQUFBZ0IsQUFDMUI7QUFDRDttQ0FDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLG9CQUFLLEFBQUssTUFBTCxBQUFXLEtBRHBCLEFBQ0ksQUFBcUIsQUFDckIsd0JBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSztBQUFMO0FBQUEsb0JBQUssQUFBSyxNQUFMLEFBQVcsS0FGcEIsQUFFSSxBQUFxQixBQUNyQiw2QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BQUwsQUFBVyxLQUhuQixBQUdJLEFBQW9CLEFBQ3BCOzs4QkFBQTtnQ0FKSixBQUlJLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQU0sRUFBRSxVQUF2QixBQUFxQixBQUFZLGNBQWMsSUFBL0MsQUFBa0Q7OEJBQWxEO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFOUixBQUtJLEFBQ0ksQUFFSix3Q0FBQSxjQUFBLE9BQUcsV0FBSCxBQUFhLGtCQUFpQixTQUFTLEtBQUEsQUFBSyxpQkFBTCxBQUFzQixLQUE3RCxBQUF1QyxBQUEyQjs4QkFBbEU7Z0NBQUE7QUFBQTtlQVRSLEFBQ0ksQUFRSSxBQUdYOzs7OztBQXRDb0IsQTs7QUF5Q3pCLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixPQUFPLEFBQzVCO1dBQU8sRUFBRSxNQUFNLE1BQUEsQUFBTSxNQUFyQixBQUFPLEFBQW9CLEFBQzlCO0FBRUQ7O2tCQUFlLHlCQUFBLEFBQVEsaUJBQWlCLEVBQUEsQUFBRSw4QkFBM0IsQUFBeUIsQUFBYSxrQ0FBckQsQUFBZSxBQUFvRCIsImZpbGUiOiJwb3N0LWRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9