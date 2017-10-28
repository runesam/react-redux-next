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
            console.log(this.props);
        }
    }, {
        key: 'renderNestedComponent',
        value: function renderNestedComponent() {
            switch (this.props.url.query.route) {
                case 'new':
                    return _react2.default.createElement(_posts_new2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nZ2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvdmlkZXIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInByb21pc2UiLCJIZWFkZXIiLCJQb3N0c0luZGV4IiwiUG9zdHNOZXciLCJyZWR1Y2VyIiwic3R5bGVzaGVldCIsIkJsb2dnZXIiLCJzdG9yZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInVybCIsInF1ZXJ5Iiwicm91dGUiLCJfX2h0bWwiLCJyZW5kZXJOZXN0ZWRDb21wb25lbnQiLCJyZXEiLCJ1c2VyQWdlbnQiLCJoZWFkZXJzIiwibmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUyxBQUFhOztBQUN0QixBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFjOzs7O0FBRXJCLEFBQU8sQUFBYTs7OztBQUVwQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7NkNBS21CLEFBQ2pCO2lCQUFBLEFBQUssUUFBTCxBQUFhLEFBQWdCLEFBQVMsQUFDdEM7b0JBQUEsQUFBUSxJQUFJLEtBQVosQUFBaUIsQUFDcEI7Ozs7Z0RBQ3VCLEFBQ3BCO29CQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQXZCLEFBQTZCLEFBQ3pCO3FCQUFBLEFBQUssQUFBTzsyQ0FBTyxBQUFDOztzQ0FBRDt3Q0FBUCxBQUFPLEFBQ25CO0FBRG1CO0FBQUEscUJBQUE7QUFDVjsyQ0FBTyxBQUFDOztzQ0FBRDt3Q0FGcEIsQUFFYSxBQUFPLEFBRXZCO0FBRnVCO0FBQUEscUJBQUE7Ozs7O2lDQUdmLEFBQ0w7bUNBQ0ksQUFBQyxzQ0FBUyxPQUFPLEtBQWpCLEFBQWlCLEFBQUssQUFBTTs4QkFBNUI7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBREosQUFDSSxBQUNBO0FBREE7QUFBQSx5REFDTyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFROzhCQUExQztnQ0FGSixBQUVJLEFBQ0M7QUFERDtxQkFKWixBQUNJLEFBQ0ksQUFHSyxBQUFLLEFBSXJCOzs7Ozs7b0JBeEI4QixBLFdBQUEsQTs7Ozs7aUNBQ3JCO0EsNENBQVksTUFBTSxJQUFBLEFBQUksUUFBVixBQUFNLEFBQVksZ0JBQWdCLFVBQVUsQTtpRUFDdkQsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFITyxBLEFBMkJ0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJibG9nZ2VyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9yZWFjdC1yZWR1eC1uZXh0In0=