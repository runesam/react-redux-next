'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createPost = exports.fetchPosts = exports.fetchWeather = exports.selectBook = exports.CREATE_POST = exports.FETCH_POSTS = exports.FETCH_WEATHER = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

/* weather stuff*/
var API_KEY = '8e7e5ad91b6ab8cee2866027ff6491d1';
var ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
var FETCH_WEATHER = 'FETCH_WEATHER';

function fetchWeather(city) {
    var url = ROOT_URL + '&q=' + city;
    var request = _axios2.default.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

/* blogger stuff*/
var PostsURL = 'http://reduxblog.herokuapp.com/api';
var PostsKey = '?key=runesam';

var FETCH_POSTS = 'FETCH_POSTS';
var CREATE_POST = 'CREATE_POST';

function fetchPosts() {
    var request = _axios2.default.get(PostsURL + '/posts' + PostsKey);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

function createPost(data) {
    var request = _axios2.default.post(PostsURL + '/posts' + PostsKey, data);
    return {
        type: CREATE_POST,
        payload: request
    };
}

exports.FETCH_WEATHER = FETCH_WEATHER;
exports.FETCH_POSTS = FETCH_POSTS;
exports.CREATE_POST = CREATE_POST;
exports.selectBook = selectBook;
exports.fetchWeather = fetchWeather;
exports.fetchPosts = fetchPosts;
exports.createPost = createPost;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNcXGluZGV4LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwic2VsZWN0Qm9vayIsImJvb2siLCJ0eXBlIiwicGF5bG9hZCIsIkFQSV9LRVkiLCJST09UX1VSTCIsIkZFVENIX1dFQVRIRVIiLCJmZXRjaFdlYXRoZXIiLCJjaXR5IiwidXJsIiwicmVxdWVzdCIsImdldCIsIlBvc3RzVVJMIiwiUG9zdHNLZXkiLCJGRVRDSF9QT1NUUyIsIkNSRUFURV9QT1NUIiwiZmV0Y2hQb3N0cyIsImNyZWF0ZVBvc3QiLCJkYXRhIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQLFNBQUEsQUFBUyxXQUFULEFBQW9CLE1BQU0sQUFDdEI7O2NBQU8sQUFDRyxBQUNOO2lCQUZKLEFBQU8sQUFFTSxBQUVoQjtBQUpVLEFBQ0g7OztBQUtSO0FBQ0EsSUFBTSxVQUFOLEFBQWdCO0FBQ2hCLElBQU0sc0VBQU4sQUFBMEU7QUFDMUUsSUFBTSxnQkFBTixBQUFzQjs7QUFFdEIsU0FBQSxBQUFTLGFBQVQsQUFBc0IsTUFBTSxBQUN4QjtRQUFNLE1BQUEsQUFBUyxtQkFBZixBQUE2QixBQUM3QjtRQUFNLFVBQVUsZ0JBQUEsQUFBTSxJQUF0QixBQUFnQixBQUFVLEFBQzFCOztjQUFPLEFBQ0csQUFDTjtpQkFGSixBQUFPLEFBRU0sQUFFaEI7QUFKVSxBQUNIOzs7QUFLUjtBQUNBLElBQU0sV0FBTixBQUFpQjtBQUNqQixJQUFNLFdBQU4sQUFBaUI7O0FBRWpCLElBQU0sY0FBTixBQUFvQjtBQUNwQixJQUFNLGNBQU4sQUFBb0I7O0FBRXBCLFNBQUEsQUFBUyxhQUFhLEFBQ2xCO1FBQU0sVUFBVSxnQkFBQSxBQUFNLElBQU4sQUFBYSxzQkFBN0IsQUFBZ0IsQUFBOEIsQUFDOUM7O2NBQU8sQUFDRyxBQUNOO2lCQUZKLEFBQU8sQUFFTSxBQUVoQjtBQUpVLEFBQ0g7OztBQUtSLFNBQUEsQUFBUyxXQUFULEFBQW9CLE1BQU0sQUFDdEI7UUFBTSxVQUFVLGdCQUFBLEFBQU0sS0FBTixBQUFjLHNCQUFkLEFBQStCLFVBQS9DLEFBQWdCLEFBQTJDLEFBQzNEOztjQUFPLEFBQ0csQUFDTjtpQkFGSixBQUFPLEFBRU0sQUFFaEI7QUFKVSxBQUNIO0FBS1I7O1FBQUEsQUFDSTtRQURKLEFBQ21CO1FBRG5CLEFBQ2dDO1FBRGhDLEFBRUk7UUFGSixBQUVnQjtRQUZoQixBQUU4QjtRQUY5QixBQUUwQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9