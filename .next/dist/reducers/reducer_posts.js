'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _index = require('../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
    all: [],
    post: null
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _index.FETCH_POST:
            return (0, _extends3.default)({}, state, { all: action.payload.data });
        default:
            return state;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxyZWR1Y2VyX3Bvc3RzLmpzIl0sIm5hbWVzIjpbIkZFVENIX1BPU1QiLCJJTklUSUFMX1NUQVRFIiwiYWxsIiwicG9zdCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFrQjs7OztBQUUzQixJQUFNO1NBQWdCLEFBQ2IsQUFDTDtVQUZKLEFBQXNCLEFBRVosQUFHVjtBQUxzQixBQUNsQjs7a0JBSVcsWUFBbUM7UUFBbEMsQUFBa0MsNEVBQTFCLEFBQTBCO1FBQVgsQUFBVyxtQkFDOUM7O1lBQVEsT0FBUixBQUFlLEFBQ1g7QUFBQSxBQUFLLEFBQ0Q7OENBQUEsQUFBWSxTQUFPLEtBQUssT0FBQSxBQUFPLFFBQS9CLEFBQXVDLEFBQzNDO0FBQ0k7bUJBSlIsQUFJUSxBQUFPLEFBRWxCOztBQVBEIiwiZmlsZSI6InJlZHVjZXJfcG9zdHMuanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==