'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _redux = require('redux');

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _head = require('./../components/head');

var _head2 = _interopRequireDefault(_head);

var _posts_index = require('./../components/posts_index');

var _posts_index2 = _interopRequireDefault(_posts_index);

var _posts_new = require('./../components/posts_new');

var _posts_new2 = _interopRequireDefault(_posts_new);

var _postDetail = require('./../components/post-detail');

var _postDetail2 = _interopRequireDefault(_postDetail);

var _reducers = require('./../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _blogger = require('../styles/blogger.scss');

var _blogger2 = _interopRequireDefault(_blogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\pages\\blogger.js?entry';


var Blogger = function (_Component) {
    (0, _inherits3.default)(Blogger, _Component);

    function Blogger() {
        (0, _classCallCheck3.default)(this, Blogger);

        return (0, _possibleConstructorReturn3.default)(this, (Blogger.__proto__ || (0, _getPrototypeOf2.default)(Blogger)).apply(this, arguments));
    }

    (0, _createClass3.default)(Blogger, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.store = (0, _redux.applyMiddleware)(_reduxPromise2.default)(_redux.createStore);
        }
    }, {
        key: 'renderNestedComponent',
        value: function renderNestedComponent() {
            switch (this.props.url.query.route) {
                case 'new':
                    return _react2.default.createElement(_posts_new2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    });
                case 'post':
                    return this.props.url.query.id ? _react2.default.createElement(_postDetail2.default, { id: this.props.url.query.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    }) : _react2.default.createElement(_posts_index2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    });
                default:
                    return _react2.default.createElement(_posts_index2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactRedux.Provider, { store: this.store(_reducers2.default), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('div', { className: 'blogger-app', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _blogger2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), this.renderNestedComponent()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var req = _ref.req;
                var userAgent;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                                return _context.abrupt('return', { userAgent: userAgent });

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Blogger;
}(_react.Component);

exports.default = Blogger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nZ2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvdmlkZXIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInByb21pc2UiLCJIZWFkZXIiLCJQb3N0c0luZGV4IiwiUG9zdHNOZXciLCJQb3N0RGV0YWlsIiwicmVkdWNlciIsInN0eWxlc2hlZXQiLCJCbG9nZ2VyIiwic3RvcmUiLCJwcm9wcyIsInVybCIsInF1ZXJ5Iiwicm91dGUiLCJpZCIsIl9faHRtbCIsInJlbmRlck5lc3RlZENvbXBvbmVudCIsInJlcSIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFTLEFBQWE7O0FBQ3RCLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7OztBQUV2QixBQUFPLEFBQWE7Ozs7QUFFcEIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7OzZDQUttQixBQUNqQjtpQkFBQSxBQUFLLFFBQUwsQUFBYSxBQUFnQixBQUFTLEFBQ3pDOzs7O2dEQUN1QixBQUNwQjtvQkFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUF2QixBQUE2QixBQUN6QjtxQkFBQSxBQUFLLEFBQU87MkNBQU8sQUFBQzs7c0NBQUQ7d0NBQVAsQUFBTyxBQUNuQjtBQURtQjtBQUFBLHFCQUFBO3FCQUNuQixBQUFLLEFBQVE7Z0NBQU8sQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQWYsQUFBcUIscUJBQUssQUFBQyxzQ0FBVyxJQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQS9CLEFBQXFDO3NDQUFyQzt3Q0FBMUIsQUFBMEI7QUFBQTtxQkFBQSxDQUExQixtQkFBd0UsQUFBQzs7c0NBQUQ7d0NBQS9FLEFBQStFLEFBQzVGO0FBRDRGO0FBQUEscUJBQUE7QUFDbkY7MkNBQU8sQUFBQzs7c0NBQUQ7d0NBSHBCLEFBR2EsQUFBTyxBQUV2QjtBQUZ1QjtBQUFBLHFCQUFBOzs7OztpQ0FHZixBQUNMO21DQUNJLEFBQUMsc0NBQVMsT0FBTyxLQUFqQixBQUFpQixBQUFLLEFBQU07OEJBQTVCO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQURKLEFBQ0ksQUFDQTtBQURBO0FBQUEseURBQ08seUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTs4QkFBMUM7Z0NBRkosQUFFSSxBQUNDO0FBREQ7cUJBSlosQUFDSSxBQUNJLEFBR0ssQUFBSyxBQUlyQjs7Ozs7O29CQXhCOEIsQSxXQUFBLEE7Ozs7O2lDQUNyQjtBLDRDQUFZLE1BQU0sSUFBQSxBQUFJLFFBQVYsQUFBTSxBQUFZLGdCQUFnQixVLEFBQVU7aUVBQ3ZELEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSE8sQSxBQTJCdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYmxvZ2dlci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9