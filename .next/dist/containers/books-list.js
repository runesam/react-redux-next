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

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\containers\\books-list.js';


var BooksList = function (_Component) {
  (0, _inherits3.default)(BooksList, _Component);

  function BooksList() {
    (0, _classCallCheck3.default)(this, BooksList);

    return (0, _possibleConstructorReturn3.default)(this, (BooksList.__proto__ || (0, _getPrototypeOf2.default)(BooksList)).apply(this, arguments));
  }

  (0, _createClass3.default)(BooksList, [{
    key: 'renderList',
    value: function renderList() {
      var _this2 = this;

      return this.props.books.map(function (book) {
        return _react2.default.createElement('button', { key: book.title, onClick: _this2.props.selectBook.bind(_this2, book), className: 'list-group-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }, book.title);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'list-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, this.renderList());
    }
  }]);

  return BooksList;
}(_react.Component);

// a function to get the data comming from the assigned reducer and map it as props


function mapStateToProps(state) {
  return { books: state.books };
}
// a function to get the actions comming from the assigned action and map it as props
function mapDispatchesToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ selectBook: _actions.selectBook }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchesToProps)(BooksList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXGJvb2tzLWxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwic2VsZWN0Qm9vayIsIkJvb2tzTGlzdCIsInByb3BzIiwiYm9va3MiLCJtYXAiLCJib29rIiwidGl0bGUiLCJiaW5kIiwicmVuZGVyTGlzdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hlc1RvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFTOztBQUVULEFBQVMsQUFBa0I7Ozs7Ozs7SSxBQUVyQjs7Ozs7Ozs7Ozs7aUNBQ1M7bUJBQ1g7O2tCQUFPLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxnQkFBQTsrQkFBUSxjQUFBLFlBQVEsS0FBSyxLQUFiLEFBQWtCLE9BQU8sU0FBUyxPQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsYUFBeEQsQUFBa0MsQUFBaUMsT0FBTyxXQUExRSxBQUFvRjtzQkFBcEY7d0JBQUEsQUFBdUc7QUFBdkc7U0FBQSxPQUFSLEFBQVEsQUFBNEc7QUFBaEosQUFBTyxBQUNSLE9BRFE7Ozs7NkJBRUEsQUFDUDs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0c7QUFESDtPQUFBLE9BREYsQUFDRSxBQUNHLEFBQUssQUFHWDs7Ozs7QSxBQVZxQjs7QUFheEI7OztBQUNBLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixPQUFPLEFBQzVCO1NBQU8sRUFBRSxPQUFPLE1BQWhCLEFBQU8sQUFBZSxBQUN6Qjs7QUFDRDtBQUNBLFNBQUEsQUFBUyxxQkFBVCxBQUE4QixVQUFVLEFBQ3BDO1NBQU8sK0JBQW1CLEVBQW5CLEFBQW1CLEFBQUUsbUNBQTVCLEFBQU8sQUFBbUMsQUFDN0M7QUFFRDs7a0JBQWUseUJBQUEsQUFBUSxpQkFBUixBQUF5QixzQkFBeEMsQUFBZSxBQUErQyIsImZpbGUiOiJib29rcy1saXN0LmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9yZWFjdC1yZWR1eC1uZXh0In0=