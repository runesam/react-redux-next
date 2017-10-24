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

var _reducers = require('./../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _blogger = require('../styles/blogger.scss');

var _blogger2 = _interopRequireDefault(_blogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\pages\\blogger.js?entry';

// import BooksList from './../containers/books-list';
// import BookDetail from './../containers/book-detail';


var Blogger = function (_Component) {
    (0, _inherits3.default)(Blogger, _Component);

    function Blogger() {
        (0, _classCallCheck3.default)(this, Blogger);

        return (0, _possibleConstructorReturn3.default)(this, (Blogger.__proto__ || (0, _getPrototypeOf2.default)(Blogger)).apply(this, arguments));
    }

    (0, _createClass3.default)(Blogger, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.store = (0, _redux.createStore)(_reducers2.default);
            console.log(this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactRedux.Provider, { store: this.store, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('div', { className: 'blogger-app', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _blogger2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            })));
        }
    }]);

    return Blogger;
}(_react.Component);

exports.default = Blogger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nZ2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvdmlkZXIiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzdHlsZXNoZWV0IiwiQmxvZ2dlciIsInN0b3JlIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVM7O0FBSVQsQUFBTyxBQUFhOzs7O0FBRXBCLEFBQU8sQUFBZ0I7Ozs7Ozs7O0FBSnZCO0FBQ0E7OztJLEFBS007Ozs7Ozs7Ozs7OzZDQUNtQixBQUNqQjtpQkFBQSxBQUFLLFFBQUwsQUFBYSxBQUFZLEFBQ3pCO29CQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBQ3BCOzs7O2lDQUNRLEFBQ0w7bUNBQ0ksQUFBQyxzQ0FBUyxPQUFPLEtBQWpCLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjt3REFDVyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFROzhCQUExQztnQ0FIWixBQUNJLEFBQ0ksQUFDSSxBQUtmO0FBTGU7Ozs7OztBQVRFLEEsQUFnQnRCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImJsb2dnZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==