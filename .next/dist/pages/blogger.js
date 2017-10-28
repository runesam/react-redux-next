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

var _redux = require('redux');

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _posts_index = require('./../components/posts_index');

var _posts_index2 = _interopRequireDefault(_posts_index);

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
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactRedux.Provider, { store: this.store(_reducers2.default), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('div', { className: 'blogger-app', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _blogger2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement(_posts_index2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            })));
        }
    }]);

    return Blogger;
}(_react.Component);

exports.default = Blogger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nZ2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvdmlkZXIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInByb21pc2UiLCJQb3N0c0luZGV4IiwicmVkdWNlciIsInN0eWxlc2hlZXQiLCJCbG9nZ2VyIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUyxBQUFhOztBQUN0QixBQUFPOzs7O0FBRVAsQUFBTyxBQUFnQjs7OztBQUV2QixBQUFPLEFBQWE7Ozs7QUFFcEIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7OzZDQUNtQixBQUNqQjtpQkFBQSxBQUFLLFFBQUwsQUFBYSxBQUFnQixBQUFTLEFBQ3RDO29CQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBQ3BCOzs7O2lDQUNRLEFBQ0w7bUNBQ0ksQUFBQyxzQ0FBUyxPQUFPLEtBQWpCLEFBQWlCLEFBQUssQUFBTTs4QkFBNUI7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7d0RBQ1cseUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTs4QkFBMUM7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQzs7OEJBQUQ7Z0NBSlosQUFDSSxBQUNJLEFBRUksQUFJZjtBQUplO0FBQUE7Ozs7O0FBVkUsQSxBQWdCdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYmxvZ2dlci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9