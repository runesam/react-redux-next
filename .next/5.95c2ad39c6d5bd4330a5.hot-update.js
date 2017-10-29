webpackHotUpdate(5,{

/***/ 518:
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

var _reactRedux = __webpack_require__(397);

var _link = __webpack_require__(450);

var _link2 = _interopRequireDefault(_link);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(409);

var _loader = __webpack_require__(723);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\workspace\\react-redux-next\\components\\posts_index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\workspace\\react-redux-next\\components\\posts_index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45NWMyYWQzOWM2ZDViZDQzMzBhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0c19pbmRleC5qcz9mMDE3MzRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hQb3N0cywgZGVsZXRlUG9zdCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2xvYWRlcic7XHJcblxyXG5jbGFzcyBQb3N0c0luZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiBmYWxzZSxcclxuICAgICAgICAgICAgbm9EYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmZldGNoUG9zdHMoKS50aGVuKCgpID0+IHRoaXMudXBkYXRlU3RhdGVzKCkpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhkYXRhKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gJy9ibG9nZ2VyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gUm91dGVyLnB1c2goJy9ibG9nZ2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLnBvc3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBub0RhdGE6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZVN0YXRlcygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZURlbGV0ZVBvc3QoaWQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTsgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVQb3N0KGlkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFBvc3RzKCkudGhlbigoKSA9PiB0aGlzLnVwZGF0ZVN0YXRlcygpKTsgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlckxvYWRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRlciAvPiA6IGZhbHNlOyBcclxuICAgIH1cclxuICAgIHJlbmRlclBvc3RzU2VjdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubm9EYXRhICYmICF0aGlzLnN0YXRlLmxvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlBvc3RzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdHMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlc3BvbnNlID8gPGgzPk5vIFBvc3RzIHRvIHNob3cgeWV0IS4gR2l2ZSBpdCBhIHRyeSBhbmQgYWRkIGEgbmV3IG9uZTwvaDM+IDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZW5kZXJQb3N0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5wb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbScga2V5PXtwb3N0LmlkfSA+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXInIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlUG9zdC5iaW5kKHRoaXMsIHBvc3QuaWQpfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3B1bGwteHMtcmlnaHQnPntwb3N0LmNhdGVnb3JpZXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17eyBwYXRobmFtZTogJy9ibG9nZ2VyJywgcXVlcnk6IHsgcm91dGU6ICdwb3N0JywgaWQ6IHBvc3QuaWQgfSB9fSBhcz17YC9ibG9nZ2VyL3Bvc3QvJHtwb3N0LmlkfWB9PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cG9zdC50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc3RzLWxpc3QnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQteHMtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e3sgcGF0aG5hbWU6ICcvYmxvZ2dlcicsIHF1ZXJ5OiB7IHJvdXRlOiAnbmV3JyB9IH19IGFzPScvYmxvZ2dlci9uZXcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSc+QWRkIGEgcG9zdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxvYWRlcigpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdHNTZWN0aW9uKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHsgcG9zdHM6IHN0YXRlLnBvc3RzLmFsbCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaFBvc3RzLCBkZWxldGVQb3N0IH0pKFBvc3RzSW5kZXgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Bvc3RzX2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBSUE7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUFBO0FBR0E7QUFGQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFHQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7OztBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==