'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchWeather = exports.selectBook = exports.FETCH_WEATHER = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_KEY = '8e7e5ad91b6ab8cee2866027ff6491d1';
var ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

var FETCH_WEATHER = 'FETCH_WEATHER';

function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

function fetchWeather(city) {
    var url = ROOT_URL + '&q=' + city;
    var request = _axios2.default.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

exports.FETCH_WEATHER = FETCH_WEATHER;
exports.selectBook = selectBook;
exports.fetchWeather = fetchWeather;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNcXGluZGV4LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiQVBJX0tFWSIsIlJPT1RfVVJMIiwiRkVUQ0hfV0VBVEhFUiIsInNlbGVjdEJvb2siLCJib29rIiwidHlwZSIsInBheWxvYWQiLCJmZXRjaFdlYXRoZXIiLCJjaXR5IiwidXJsIiwicmVxdWVzdCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQLElBQU0sVUFBTixBQUFnQjtBQUNoQixJQUFNLHNFQUFOLEFBQTBFOztBQUUxRSxJQUFNLGdCQUFOLEFBQXNCOztBQUV0QixTQUFBLEFBQVMsV0FBVCxBQUFvQixNQUFNLEFBQ3RCOztjQUFPLEFBQ0csQUFDTjtpQkFGSixBQUFPLEFBRU0sQUFFaEI7QUFKVSxBQUNIOzs7QUFLUixTQUFBLEFBQVMsYUFBVCxBQUFzQixNQUFNLEFBQ3hCO1FBQU0sTUFBQSxBQUFTLG1CQUFmLEFBQTZCLEFBQzdCO1FBQU0sVUFBVSxnQkFBQSxBQUFNLElBQXRCLEFBQWdCLEFBQVUsQUFDMUI7O2NBQU8sQUFDRyxBQUNOO2lCQUZKLEFBQU8sQUFFTSxBQUVoQjtBQUpVLEFBQ0g7QUFLUjs7UUFBQSxBQUFTO1FBQVQsQUFBd0I7UUFBeEIsQUFBb0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==