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
      return this.props.books.map(function (book) {
        return _react2.default.createElement('li', { key: book.title, className: 'list-group-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        }, book.title);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('ul', { className: 'list-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, this.renderList());
    }
  }]);

  return BooksList;
}(_react.Component);

function mapStateToProps(state) {
  return { books: state.books };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BooksList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXGJvb2tzLWxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiQm9va3NMaXN0IiwicHJvcHMiLCJib29rcyIsIm1hcCIsImJvb2siLCJ0aXRsZSIsInJlbmRlckxpc3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7O2lDQUNTLEFBQ1g7a0JBQU8sQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixJQUFJLGdCQUFBOytCQUFRLGNBQUEsUUFBSSxLQUFLLEtBQVQsQUFBYyxPQUFPLFdBQXJCLEFBQStCO3NCQUEvQjt3QkFBQSxBQUFrRDtBQUFsRDtTQUFBLE9BQVIsQUFBUSxBQUF1RDtBQUEzRixBQUFPLEFBQ1IsT0FEUTs7Ozs2QkFFQSxBQUNQOzZCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRztBQURIO09BQUEsT0FERixBQUNFLEFBQ0csQUFBSyxBQUdYOzs7OztBQVZxQixBOztBQWF4QixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsT0FBTyxBQUM5QjtTQUFPLEVBQUUsT0FBTyxNQUFoQixBQUFPLEFBQWUsQUFDdkI7QUFFRDs7a0JBQWUseUJBQUEsQUFBUSxpQkFBdkIsQUFBZSxBQUF5QiIsImZpbGUiOiJib29rcy1saXN0LmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmtzcGFjZS9yZWFjdC1yZWR1eC1uZXh0In0=