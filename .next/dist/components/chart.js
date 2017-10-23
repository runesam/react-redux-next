'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSparklines = require('react-sparklines');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\components\\chart.js';


var average = function average(arr) {
    return Math.round(arr.reduce(function (b, a) {
        return b + a;
    }, 0) / arr.length);
};

exports.default = function (props) {
    return _react2.default.createElement('div', { className: 'chart-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_reactSparklines.Sparklines, { limit: 20, data: props.data, width: 200, height: 200, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement(_reactSparklines.SparklinesLine, { color: props.color, style: { stroke: 'black', fill: '#8fc638' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement(_reactSparklines.SparklinesSpots, { style: { fill: 'orange' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement(_reactSparklines.SparklinesReferenceLine, { type: 'avg', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })), _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, average(props.data)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNoYXJ0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3BhcmtsaW5lcyIsIlNwYXJrbGluZXNMaW5lIiwiU3BhcmtsaW5lc1Nwb3RzIiwiU3BhcmtsaW5lc1JlZmVyZW5jZUxpbmUiLCJhdmVyYWdlIiwiTWF0aCIsInJvdW5kIiwiYXJyIiwicmVkdWNlIiwiYiIsImEiLCJsZW5ndGgiLCJwcm9wcyIsImRhdGEiLCJjb2xvciIsInN0cm9rZSIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVksQUFBZ0IsQUFBaUI7Ozs7Ozs7QUFFdEQsSUFBTSxVQUFVLFNBQVYsQUFBVSxhQUFBO1dBQU8sS0FBQSxBQUFLLFVBQU0sQUFBSSxPQUFPLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSjtlQUFVLElBQVYsQUFBYztBQUF6QixLQUFBLEVBQUEsQUFBNEIsS0FBSyxJQUFuRCxBQUFPLEFBQWdEO0FBQXZFLEFBQ0E7O2tCQUFlLGlCQUFBOzJCQUNYLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQyw2Q0FBVyxPQUFaLEFBQW1CLElBQUksTUFBTSxNQUE3QixBQUFtQyxNQUFNLE9BQXpDLEFBQWdELEtBQUssUUFBckQsQUFBNkQ7c0JBQTdEO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDLGlEQUFlLE9BQU8sTUFBdkIsQUFBNkIsT0FBTyxPQUFPLEVBQUUsUUFBRixBQUFVLFNBQVMsTUFBOUQsQUFBMkMsQUFBeUI7c0JBQXBFO3dCQURKLEFBQ0ksQUFDQTtBQURBO3dCQUNBLEFBQUMsa0RBQWdCLE9BQU8sRUFBRSxNQUExQixBQUF3QixBQUFRO3NCQUFoQzt3QkFGSixBQUVJLEFBQ0E7QUFEQTt3QkFDQSxBQUFDLDBEQUF3QixNQUF6QixBQUE4QjtzQkFBOUI7d0JBSlIsQUFDSSxBQUdJLEFBRUo7QUFGSTt5QkFFSixjQUFBOztzQkFBQTt3QkFBQSxBQUFNO0FBQU47QUFBQSxlQUFjLE1BUFAsQUFDWCxBQU1JLEFBQU0sQUFBYztBQVA1QiIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9