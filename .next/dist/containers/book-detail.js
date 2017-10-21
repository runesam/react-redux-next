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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\containers\\book-detail.js';

// import { bindActionCreators } from 'redux';

var BookDetail = function (_Component) {
    (0, _inherits3.default)(BookDetail, _Component);

    function BookDetail() {
        (0, _classCallCheck3.default)(this, BookDetail);

        return (0, _possibleConstructorReturn3.default)(this, (BookDetail.__proto__ || (0, _getPrototypeOf2.default)(BookDetail)).apply(this, arguments));
    }

    (0, _createClass3.default)(BookDetail, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'book-detail', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, 'Details:'), 'title: ' + (this.props.book ? this.props.book.title : 'No selected book yet. why don\'t you select one !'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }), 'pages: ' + (this.props.book ? this.props.book.pages : 0));
        }
    }]);

    return BookDetail;
}(_react.Component);

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BookDetail);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXGJvb2stZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIkJvb2tEZXRhaWwiLCJwcm9wcyIsImJvb2siLCJ0aXRsZSIsInBhZ2VzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhY3RpdmVCb29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOzs7Ozs7QUFDVDs7SSxBQUVNOzs7Ozs7Ozs7OztpQ0FDTyxBQUNMO21DQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSwwQkFDVyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUE3QixBQUFrQyxRQUZqRCxBQUV5RCxBQUNyRDs7OEJBQUE7Z0NBSEosQUFHSTtBQUFBO0FBQUEsNkJBQ1csS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBN0IsQUFBa0MsUUFMckQsQUFDSSxBQUl5RCxBQUdoRTs7Ozs7QUFWb0IsQTs7QUFhekIsU0FBQSxBQUFTLGdCQUFULEFBQXlCLE9BQU8sQUFDNUI7O2NBQ1UsTUFEVixBQUFPLEFBQ1MsQUFFbkI7QUFIVSxBQUNIO0FBSVI7O2tCQUFlLHlCQUFBLEFBQVEsaUJBQXZCLEFBQWUsQUFBeUIiLCJmaWxlIjoiYm9vay1kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==