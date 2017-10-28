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

    function PostsIndex() {
        (0, _classCallCheck3.default)(this, PostsIndex);

        return (0, _possibleConstructorReturn3.default)(this, (PostsIndex.__proto__ || (0, _getPrototypeOf2.default)(PostsIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(PostsIndex, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.fetchPosts();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('div', { className: 'text-xs-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement(_link2.default, { prefetch: true, href: { pathname: '/blogger', query: { route: 'new' } }, as: '/blogger/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('a', { className: 'btn btn-primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, 'Add a post'))), 'posts list');
        }
    }]);

    return PostsIndex;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, { fetchPosts: _index.fetchPosts })(PostsIndex);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBvc3RzX2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIkxpbmsiLCJmZXRjaFBvc3RzIiwiUG9zdHNJbmRleCIsInByb3BzIiwicGF0aG5hbWUiLCJxdWVyeSIsInJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU87Ozs7QUFFUCxBQUFTLEFBQWtCOzs7Ozs7O0lBRXJCLEE7Ozs7Ozs7Ozs7OzZDQUNtQixBQUNqQjtpQkFBQSxBQUFLLE1BQUwsQUFBVyxBQUNkOzs7O2lDQUNRLEFBQ0w7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFNLEVBQUUsVUFBRixBQUFZLFlBQVksT0FBTyxFQUFFLE9BQXRELEFBQXFCLEFBQStCLEFBQVMsV0FBVyxJQUF4RSxBQUEyRTs4QkFBM0U7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQUhaLEFBQ0ksQUFDSSxBQUNJLGlCQUpoQixBQUNJLEFBU1A7Ozs7O0EsQUFmb0IsQUFrQnpCOztrQkFBZSx5QkFBQSxBQUFRLE1BQU0sRUFBZCxBQUFjLEFBQUUsaUNBQS9CLEFBQWUsQUFBOEIiLCJmaWxlIjoicG9zdHNfaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==