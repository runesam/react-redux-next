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

var _jsxFileName = 'C:\\workspace\\react-redux-next\\containers\\search-bar.js';


var SearchBar = function (_Component) {
    (0, _inherits3.default)(SearchBar, _Component);

    function SearchBar(props) {
        (0, _classCallCheck3.default)(this, SearchBar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SearchBar.__proto__ || (0, _getPrototypeOf2.default)(SearchBar)).call(this, props));

        _this.state = {
            keyWord: ''
        };
        return _this;
    }

    (0, _createClass3.default)(SearchBar, [{
        key: 'onInpuChange',
        value: function onInpuChange(e) {
            this.setState({
                keyWord: e.target.value
            });
        }
    }, {
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            e.preventDefault();
            this.props.fetchWeather(this.state.keyWord).then().catch(function (reason) {
                return console.log(reason);
            });
            this.setState({ keyWord: '' });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('form', { className: 'search-form', onSubmit: this.onFormSubmit.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('input', {
                type: 'text',
                value: this.state.keyWord,
                onChange: this.onInpuChange.bind(this),
                placeholder: 'Get a five-day forecast in your favorite cities',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('button', { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'Search'));
        }
    }]);

    return SearchBar;
}(_react.Component);

function mapDispatchesToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ fetchWeather: _actions.fetchWeather }, dispatch);
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchesToProps)(SearchBar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXHNlYXJjaC1iYXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiZmV0Y2hXZWF0aGVyIiwiU2VhcmNoQmFyIiwicHJvcHMiLCJzdGF0ZSIsImtleVdvcmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsInJlYXNvbiIsIm9uRm9ybVN1Ym1pdCIsImJpbmQiLCJvbklucHVDaGFuZ2UiLCJtYXBEaXNwYXRjaGVzVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVM7O0FBRVQsQUFBUyxBQUFvQjs7Ozs7OztJQUV2QixBO3VDQUNGOzt1QkFBQSxBQUFZLE9BQU87NENBQUE7O2dKQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3FCQUZVLEFBRWYsQUFBYSxBQUNBO0FBREEsQUFDVDtlQUVQOzs7OztxQyxBQUNZLEdBQUcsQUFDWjtpQkFBQSxBQUFLO3lCQUNRLEVBQUEsQUFBRSxPQURmLEFBQWMsQUFDUSxBQUV6QjtBQUhpQixBQUNWOzs7O3FDQUdLLEEsR0FBRyxBQUNaO2NBQUEsQUFBRSxBQUNGO2lCQUFBLEFBQUssTUFBTCxBQUFXLGFBQWEsS0FBQSxBQUFLLE1BQTdCLEFBQW1DLFNBQW5DLEFBQTRDLE9BQTVDLEFBQW1ELE1BQU0sa0JBQUE7dUJBQVUsUUFBQSxBQUFRLElBQWxCLEFBQVUsQUFBWTtBQUEvRSxBQUNBO2lCQUFBLEFBQUssU0FBUyxFQUFFLFNBQWhCLEFBQWMsQUFBVyxBQUM1Qjs7OztpQ0FDUSxBQUNMO21DQUNJLGNBQUEsVUFBTSxXQUFOLEFBQWdCLGVBQWMsVUFBVSxLQUFBLEFBQUssYUFBTCxBQUFrQixLQUExRCxBQUF3QyxBQUF1Qjs4QkFBL0Q7Z0NBQUEsQUFDSTtBQURKO2FBQUE7c0JBQ0ksQUFDUyxBQUNMO3VCQUFPLEtBQUEsQUFBSyxNQUZoQixBQUVzQixBQUNsQjswQkFBVSxLQUFBLEFBQUssYUFBTCxBQUFrQixLQUhoQyxBQUdjLEFBQXVCLEFBQ2pDOzZCQUpKLEFBSWdCOzs4QkFKaEI7Z0NBREosQUFDSSxBQU1BO0FBTkE7QUFDSSxnQ0FLSixjQUFBLFlBQVEsTUFBUixBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFSUixBQUNJLEFBT0ksQUFLWDs7Ozs7QUEvQm1CLEE7O0FBa0N4QixTQUFBLEFBQVMscUJBQVQsQUFBOEIsVUFBVSxBQUNwQztXQUFPLCtCQUFtQixFQUFuQixBQUFtQixBQUFFLHVDQUE1QixBQUFPLEFBQXFDLEFBQy9DO0FBRUQ7O2tCQUFlLHlCQUFBLEFBQVEsTUFBUixBQUFjLHNCQUE3QixBQUFlLEFBQW9DIiwiZmlsZSI6InNlYXJjaC1iYXIuanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==