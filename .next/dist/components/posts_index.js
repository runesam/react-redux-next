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

var _jsxFileName = 'C:\\workspace\\react-redux-next\\components\\posts_index.js';


var PostsIndex = function (_Component) {
    (0, _inherits3.default)(PostsIndex, _Component);

    function PostsIndex(props) {
        (0, _classCallCheck3.default)(this, PostsIndex);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PostsIndex.__proto__ || (0, _getPrototypeOf2.default)(PostsIndex)).call(this, props));

        _this.state = {
            response: false,
            noData: true,
            loading: true
        };
        return _this;
    }

    (0, _createClass3.default)(PostsIndex, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.props.fetchPosts().then(function () {
                return _this2.updateStates();
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(data) {
            if (window.location.pathname !== '/blogger') {
                return _index2.default.push('/blogger');
            }
            if (data.posts.length > 0) {
                return this.setState({ noData: false });
            }
        }
    }, {
        key: 'updateStates',
        value: function updateStates() {
            this.setState({
                loading: false
            });
        }
    }, {
        key: 'handleDeletePost',
        value: function handleDeletePost(id) {
            var _this3 = this;

            this.setState({ loading: true });
            this.props.deletePost(id).then(function () {
                _this3.props.fetchPosts().then(function () {
                    return _this3.updateStates();
                });
            });
        }
    }, {
        key: 'renderLoader',
        value: function renderLoader() {
            return this.state.loading ? _react2.default.createElement(_loader2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }) : false;
        }
    }, {
        key: 'renderPostsSection',
        value: function renderPostsSection() {
            if (!this.state.noData && !this.state.loading) {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }, 'Posts'), _react2.default.createElement('ul', { className: 'list-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }, this.renderPosts()));
            }
            return this.state.response ? _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'No Posts to show yet!. Give it a try and add a new one') : false;
        }
    }, {
        key: 'renderPosts',
        value: function renderPosts() {
            var _this4 = this;

            return this.props.posts.map(function (post) {
                return _react2.default.createElement('li', { className: 'list-group-item', key: post.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }, _react2.default.createElement('button', { className: 'btn btn-danger', onClick: _this4.handleDeletePost.bind(_this4, post.id), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }, 'X'), _react2.default.createElement('span', { className: 'pull-xs-right', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                }, post.categories), _react2.default.createElement(_link2.default, { prefetch: true, href: { pathname: '/blogger', query: { route: 'post', id: post.id } }, as: '/blogger/post/' + post.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, post.title))));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'posts-list', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('div', { className: 'text-xs-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_link2.default, { prefetch: true, href: { pathname: '/blogger', query: { route: 'new' } }, as: '/blogger/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('a', { className: 'btn btn-primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Add a post'))), this.renderLoader(), this.renderPostsSection());
        }
    }]);

    return PostsIndex;
}(_react.Component);

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _index3.fetchPosts, deletePost: _index3.deletePost })(PostsIndex);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBvc3RzX2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIkxpbmsiLCJSb3V0ZXIiLCJmZXRjaFBvc3RzIiwiZGVsZXRlUG9zdCIsIkxvYWRlciIsIlBvc3RzSW5kZXgiLCJwcm9wcyIsInN0YXRlIiwicmVzcG9uc2UiLCJub0RhdGEiLCJsb2FkaW5nIiwidGhlbiIsInVwZGF0ZVN0YXRlcyIsImRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsInBvc3RzIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJpZCIsInJlbmRlclBvc3RzIiwibWFwIiwicG9zdCIsImhhbmRsZURlbGV0ZVBvc3QiLCJiaW5kIiwiY2F0ZWdvcmllcyIsInF1ZXJ5Iiwicm91dGUiLCJ0aXRsZSIsInJlbmRlckxvYWRlciIsInJlbmRlclBvc3RzU2VjdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQVMsQUFBWSxBQUFrQjs7QUFFdkMsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBO3dDQUNGOzt3QkFBQSxBQUFZLE9BQU87NENBQUE7O2tKQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3NCQUFRLEFBQ0MsQUFDVjtvQkFGUyxBQUVELEFBQ1I7cUJBTFcsQUFFZixBQUFhLEFBR0E7QUFIQSxBQUNUO2VBSVA7Ozs7OzZDQUNvQjt5QkFDakI7O2lCQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsS0FBSyxZQUFBO3VCQUFNLE9BQU4sQUFBTSxBQUFLO0FBQXhDLEFBQ0g7Ozs7a0RBQ3lCLEEsTUFBTSxBQUM1QjtnQkFBSSxPQUFBLEFBQU8sU0FBUCxBQUFnQixhQUFwQixBQUFpQyxZQUFZLEFBQ3pDO3VCQUFPLGdCQUFBLEFBQU8sS0FBZCxBQUFPLEFBQVksQUFDdEI7QUFDRDtnQkFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQWYsQUFBd0IsR0FBRyxBQUN2Qjt1QkFBTyxLQUFBLEFBQUssU0FBUyxFQUFFLFFBQXZCLEFBQU8sQUFBYyxBQUFVLEFBQ2xDO0FBQ0o7Ozs7dUNBQ2MsQUFDWDtpQkFBQSxBQUFLO3lCQUFMLEFBQWMsQUFDRCxBQUVoQjtBQUhpQixBQUNWOzs7O3lDLEFBR1MsSUFBSTt5QkFDakI7O2lCQUFBLEFBQUssU0FBUyxFQUFFLFNBQWhCLEFBQWMsQUFBVyxBQUN6QjtpQkFBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLElBQXRCLEFBQTBCLEtBQUssWUFBTSxBQUNqQzt1QkFBQSxBQUFLLE1BQUwsQUFBVyxhQUFYLEFBQXdCLEtBQUssWUFBQTsyQkFBTSxPQUFOLEFBQU0sQUFBSztBQUF4QyxBQUNIO0FBRkQsQUFHSDs7Ozt1Q0FDYyxBQUNYO3dCQUFPLEFBQUssTUFBTCxBQUFXLDBCQUFVLEFBQUM7OzhCQUFEO2dDQUFyQixBQUFxQjtBQUFBO0FBQUEsYUFBQSxDQUFyQixHQUFQLEFBQXlDLEFBQzVDOzs7OzZDQUNvQixBQUNqQjtnQkFBSSxDQUFDLEtBQUEsQUFBSyxNQUFOLEFBQVksVUFBVSxDQUFDLEtBQUEsQUFBSyxNQUFoQyxBQUFzQyxTQUFTLEFBQzNDO3VDQUNJLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBLGlCQUFBLGtCQUNJLGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFESixBQUNJLEFBQ0EsMEJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztrQ0FBZDtvQ0FBQSxBQUNLO0FBREw7d0JBSFIsQUFDSSxBQUVJLEFBQ0ssQUFBSyxBQUlyQjtBQUNEO21CQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsMkJBQVcsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGFBQUEsRUFBdEIsQUFBc0IsNERBQTdCLEFBQStGLEFBQ2xHOzs7O3NDQUNhO3lCQUNWOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLElBQUksZ0JBQUE7dUNBQ3hCLGNBQUEsUUFBSSxXQUFKLEFBQWMsbUJBQWtCLEtBQUssS0FBckMsQUFBMEM7a0NBQTFDO29DQUFBLEFBQ0k7QUFESjtpQkFBQSxrQkFDSSxjQUFBLFlBQVEsV0FBUixBQUFrQixrQkFBaUIsU0FBUyxPQUFBLEFBQUssaUJBQUwsQUFBc0IsYUFBVyxLQUE3RSxBQUE0QyxBQUFzQztrQ0FBbEY7b0NBQUE7QUFBQTttQkFESixBQUNJLEFBQ0Esc0JBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7a0NBQWhCO29DQUFBLEFBQWlDO0FBQWpDO3dCQUZKLEFBRUksQUFBc0MsQUFDdEMsNkJBQUEsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBTSxFQUFFLFVBQUYsQUFBWSxZQUFZLE9BQU8sRUFBRSxPQUFGLEFBQVMsUUFBUSxJQUFJLEtBQXpFLEFBQXFCLEFBQStCLEFBQTBCLFFBQVEsdUJBQXFCLEtBQTNHLEFBQWdIO2tDQUFoSDtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ksY0FBQTs7a0NBQUE7b0NBQUEsQUFDSTtBQURKO0FBQUEsbUNBQ0ksY0FBQTs7a0NBQUE7b0NBQUEsQUFBUztBQUFUO0FBQUEsd0JBTlksQUFDeEIsQUFHSSxBQUNJLEFBQ0ksQUFBYztBQU45QixBQUFPLEFBV1YsYUFYVTs7OztpQ0FZRixBQUNMO21DQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBTSxFQUFFLFVBQUYsQUFBWSxZQUFZLE9BQU8sRUFBRSxPQUF0RCxBQUFxQixBQUErQixBQUFTLFdBQVcsSUFBeEUsQUFBMkU7OEJBQTNFO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFIWixBQUNJLEFBQ0ksQUFDSSxBQUdQLHNCQU5MLEFBTUssQUFBSyxBQUNMLHFCQVJULEFBQ0ksQUFPSyxBQUFLLEFBR2pCOzs7OztBQXhFb0IsQTs7QUEyRXpCLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixPQUFPLEFBQzVCO1dBQU8sRUFBRSxPQUFPLE1BQUEsQUFBTSxNQUF0QixBQUFPLEFBQXFCLEFBQy9CO0FBRUQ7O2tCQUFlLHlCQUFBLEFBQVEsaUJBQWlCLEVBQUEsQUFBRSxnQ0FBM0IsQUFBeUIsQUFBYyxrQ0FBdEQsQUFBZSxBQUFxRCIsImZpbGUiOiJwb3N0c19pbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9