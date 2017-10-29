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

var _index = require('../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\components\\posts_index.js';


var PostsIndex = function (_Component) {
    (0, _inherits3.default)(PostsIndex, _Component);

    function PostsIndex(props) {
        (0, _classCallCheck3.default)(this, PostsIndex);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PostsIndex.__proto__ || (0, _getPrototypeOf2.default)(PostsIndex)).call(this, props));

        _this.state = {
            response: false
        };
        return _this;
    }

    (0, _createClass3.default)(PostsIndex, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.props.fetchPosts().then(function () {
                return _this2.setState({ response: true });
            });
        }
    }, {
        key: 'renderLoader',
        value: function renderLoader() {
            if (!this.state.response) {
                return _react2.default.createElement('div', { className: 'loader loader1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                })))))));
            }
        }
    }, {
        key: 'renderPostsSection',
        value: function renderPostsSection() {
            if (this.state.response) {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }, 'Posts'), _react2.default.createElement('ul', { className: 'list-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }, this.renderPosts()));
            }
        }
    }, {
        key: 'renderPosts',
        value: function renderPosts() {
            if (this.state.response) {
                return this.props.posts.map(function (post) {
                    return _react2.default.createElement('li', { className: 'list-group-item', key: post.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    }, _react2.default.createElement('button', { className: 'btn btn-danger', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    }, 'X'), _react2.default.createElement('span', { className: 'pull-xs-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    }, post.categories), _react2.default.createElement('strong', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        }
                    }, post.title));
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'posts-list', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('div', { className: 'text-xs-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_link2.default, { prefetch: true, href: { pathname: '/blogger', query: { route: 'new' } }, as: '/blogger/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('a', { className: 'btn btn-primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Add a post'))), this.renderLoader(), this.renderPostsSection());
        }
    }]);

    return PostsIndex;
}(_react.Component);

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _index.fetchPosts })(PostsIndex);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBvc3RzX2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIkxpbmsiLCJmZXRjaFBvc3RzIiwiUG9zdHNJbmRleCIsInByb3BzIiwic3RhdGUiLCJyZXNwb25zZSIsInRoZW4iLCJzZXRTdGF0ZSIsInJlbmRlclBvc3RzIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaWQiLCJjYXRlZ29yaWVzIiwidGl0bGUiLCJwYXRobmFtZSIsInF1ZXJ5Iiwicm91dGUiLCJyZW5kZXJMb2FkZXIiLCJyZW5kZXJQb3N0c1NlY3Rpb24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUVQLEFBQVMsQUFBa0I7Ozs7Ozs7SSxBQUVyQjt3Q0FDRjs7d0JBQUEsQUFBWSxPQUFPOzRDQUFBOztrSkFBQSxBQUNULEFBQ047O2NBQUEsQUFBSztzQkFGVSxBQUVmLEFBQWEsQUFDQztBQURELEFBQ1Q7ZUFFUDs7Ozs7NkNBQ29CO3lCQUNqQjs7aUJBQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixLQUFLLFlBQUE7dUJBQU0sT0FBQSxBQUFLLFNBQVMsRUFBRSxVQUF0QixBQUFNLEFBQWMsQUFBWTtBQUE3RCxBQUNIOzs7O3VDQUNjLEFBQ1g7Z0JBQUksQ0FBQyxLQUFBLEFBQUssTUFBVixBQUFnQixVQUFVLEFBQ3RCO3VDQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7a0NBQWY7b0NBQUEsQUFDSTtBQURKO2lCQUFBLGtCQUNJLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBOztrQ0FDSTtvQ0FQNUIsQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQVEvQjtBQVIrQjtBQUFBO0FBU25DOzs7OzZDQUNvQixBQUNqQjtnQkFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLFVBQVUsQUFDckI7dUNBQ0ksY0FBQTs7a0NBQUE7b0NBQUEsQUFDSTtBQURKO0FBQUEsaUJBQUEsa0JBQ0ksY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQURKLEFBQ0ksQUFDQSwwQkFBQSxjQUFBLFFBQUksV0FBSixBQUFjO2tDQUFkO29DQUFBLEFBQ0s7QUFETDt3QkFIUixBQUNJLEFBRUksQUFDSyxBQUFLLEFBSXJCO0FBQ0o7Ozs7c0NBQ2EsQUFDVjtnQkFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLFVBQVUsQUFDckI7NEJBQU8sQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixJQUFJLGdCQUFBOzJDQUN4QixjQUFBLFFBQUksV0FBSixBQUFjLG1CQUFrQixLQUFLLEtBQXJDLEFBQTBDO3NDQUExQzt3Q0FBQSxBQUNJO0FBREo7cUJBQUEsa0JBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0I7c0NBQWxCO3dDQUFBO0FBQUE7dUJBREosQUFDSSxBQUNBLHNCQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NDQUFoQjt3Q0FBQSxBQUFpQztBQUFqQzs0QkFGSixBQUVJLEFBQXNDLEFBQ3RDLDZCQUFBLGNBQUE7O3NDQUFBO3dDQUFBLEFBQVM7QUFBVDtBQUFBLDRCQUpvQixBQUN4QixBQUdJLEFBQWM7QUFKdEIsQUFBTyxBQU9WLGlCQVBVO0FBUWQ7Ozs7aUNBQ1EsQUFDTDttQ0FDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQU0sRUFBRSxVQUFGLEFBQVksWUFBWSxPQUFPLEVBQUUsT0FBdEQsQUFBcUIsQUFBK0IsQUFBUyxXQUFXLElBQXhFLEFBQTJFOzhCQUEzRTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBSFosQUFDSSxBQUNJLEFBQ0ksQUFHUCxzQkFOTCxBQU1LLEFBQUssQUFDTCxxQkFSVCxBQUNJLEFBT0ssQUFBSyxBQUdqQjs7Ozs7QUFoRW9CLEE7O0FBbUV6QixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsT0FBTyxBQUM1QjtXQUFPLEVBQUUsT0FBTyxNQUFBLEFBQU0sTUFBdEIsQUFBTyxBQUFxQixBQUMvQjtBQUVEOztrQkFBZSx5QkFBQSxBQUFRLGlCQUFpQixFQUF6QixBQUF5QixBQUFFLGlDQUExQyxBQUFlLEFBQXlDIiwiZmlsZSI6InBvc3RzX2luZGV4LmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9yZWFjdC1yZWR1eC1uZXh0In0=