'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var reducerBooks = function reducerBooks() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }
};

exports.default = reducerBooks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxyZWR1Y2VyX2FjdGl2ZV9ib29rLmpzIl0sIm5hbWVzIjpbInJlZHVjZXJCb29rcyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxlQUFlLFNBQWYsQUFBZSxlQUEwQjtRQUF6QixBQUF5Qiw0RUFBakIsQUFBaUI7UUFBWCxBQUFXLG1CQUMzQzs7WUFBUSxPQUFPLEFBQWYsQUFDSTthQUFLLEFBQUwsQUFDQTttQkFBTyxPQUFPLEFBQWQsQUFDQTtBQUNBO21CQUFPLEFBQVAsQUFKSixBQU1IOztBQVBELEFBU0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoicmVkdWNlcl9hY3RpdmVfYm9vay5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9