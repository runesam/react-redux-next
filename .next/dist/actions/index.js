'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deletePost = exports.fetchPost = exports.createPost = exports.fetchPosts = exports.fetchWeather = exports.selectBook = exports.DELETE_POST = exports.FETCH_POST = exports.CREATE_POST = exports.FETCH_POSTS = exports.FETCH_WEATHER = undefined;

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
var FETCH_POST = 'FETCH_POST';
var DELETE_POST = 'DELETE_POST';

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

function fetchPost(id) {
    var request = _axios2.default.get(PostsURL + '/posts/' + id + PostsKey);
    return {
        type: FETCH_POST,
        payload: request
    };
}

function deletePost(id) {
    var request = _axios2.default.delete(PostsURL + '/posts/' + id + PostsKey);
    return {
        type: FETCH_POST,
        payload: request
    };
}

exports.FETCH_WEATHER = FETCH_WEATHER;
exports.FETCH_POSTS = FETCH_POSTS;
exports.CREATE_POST = CREATE_POST;
exports.FETCH_POST = FETCH_POST;
exports.DELETE_POST = DELETE_POST;
exports.selectBook = selectBook;
exports.fetchWeather = fetchWeather;
exports.fetchPosts = fetchPosts;
exports.createPost = createPost;
exports.fetchPost = fetchPost;
exports.deletePost = deletePost;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNcXGluZGV4LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwic2VsZWN0Qm9vayIsImJvb2siLCJ0eXBlIiwicGF5bG9hZCIsIkFQSV9LRVkiLCJST09UX1VSTCIsIkZFVENIX1dFQVRIRVIiLCJmZXRjaFdlYXRoZXIiLCJjaXR5IiwidXJsIiwicmVxdWVzdCIsImdldCIsIlBvc3RzVVJMIiwiUG9zdHNLZXkiLCJGRVRDSF9QT1NUUyIsIkNSRUFURV9QT1NUIiwiRkVUQ0hfUE9TVCIsIkRFTEVURV9QT1NUIiwiZmV0Y2hQb3N0cyIsImNyZWF0ZVBvc3QiLCJkYXRhIiwicG9zdCIsImZldGNoUG9zdCIsImlkIiwiZGVsZXRlUG9zdCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQLFNBQUEsQUFBUyxXQUFULEFBQW9CLE1BQU0sQUFDdEI7O2NBQU8sQUFDRyxBQUNOO2lCQUZKLEFBQU8sQUFFTSxBQUVoQjtBQUpVLEFBQ0g7OztBQUtSO0FBQ0EsSUFBTSxVQUFOLEFBQWdCO0FBQ2hCLElBQU0sc0VBQU4sQUFBMEU7QUFDMUUsSUFBTSxnQkFBTixBQUFzQjs7QUFFdEIsU0FBQSxBQUFTLGFBQVQsQUFBc0IsTUFBTSxBQUN4QjtRQUFNLE1BQUEsQUFBUyxtQkFBZixBQUE2QixBQUM3QjtRQUFNLFVBQVUsZ0JBQUEsQUFBTSxJQUF0QixBQUFnQixBQUFVLEFBQzFCOztjQUFPLEFBQ0csQUFDTjtpQkFGSixBQUFPLEFBRU0sQUFFaEI7QUFKVSxBQUNIOzs7QUFLUjtBQUNBLElBQU0sV0FBTixBQUFpQjtBQUNqQixJQUFNLFdBQU4sQUFBaUI7O0FBRWpCLElBQU0sY0FBTixBQUFvQjtBQUNwQixJQUFNLGNBQU4sQUFBb0I7QUFDcEIsSUFBTSxhQUFOLEFBQW1CO0FBQ25CLElBQU0sY0FBTixBQUFvQjs7QUFFcEIsU0FBQSxBQUFTLGFBQWEsQUFDbEI7UUFBTSxVQUFVLGdCQUFBLEFBQU0sSUFBTixBQUFhLHNCQUE3QixBQUFnQixBQUE4QixBQUM5Qzs7Y0FBTyxBQUNHLEFBQ047aUJBRkosQUFBTyxBQUVNLEFBRWhCO0FBSlUsQUFDSDs7O0FBS1IsU0FBQSxBQUFTLFdBQVQsQUFBb0IsTUFBTSxBQUN0QjtRQUFNLFVBQVUsZ0JBQUEsQUFBTSxLQUFOLEFBQWMsc0JBQWQsQUFBK0IsVUFBL0MsQUFBZ0IsQUFBMkMsQUFDM0Q7O2NBQU8sQUFDRyxBQUNOO2lCQUZKLEFBQU8sQUFFTSxBQUVoQjtBQUpVLEFBQ0g7OztBQUtSLFNBQUEsQUFBUyxVQUFULEFBQW1CLElBQUksQUFDbkI7UUFBTSxVQUFVLGdCQUFBLEFBQU0sSUFBTixBQUFhLHVCQUFiLEFBQStCLEtBQS9DLEFBQWdCLEFBQW9DLEFBQ3BEOztjQUFPLEFBQ0csQUFDTjtpQkFGSixBQUFPLEFBRU0sQUFFaEI7QUFKVSxBQUNIOzs7QUFLUixTQUFBLEFBQVMsV0FBVCxBQUFvQixJQUFJLEFBQ3BCO1FBQU0sVUFBVSxnQkFBQSxBQUFNLE9BQU4sQUFBZ0IsdUJBQWhCLEFBQWtDLEtBQWxELEFBQWdCLEFBQXVDLEFBQ3ZEOztjQUFPLEFBQ0csQUFDTjtpQkFGSixBQUFPLEFBRU0sQUFFaEI7QUFKVSxBQUNIO0FBS1I7O1FBQUEsQUFDSTtRQURKLEFBQ21CO1FBRG5CLEFBQ2dDO1FBRGhDLEFBQzZDO1FBRDdDLEFBQ3lEO1FBRHpELEFBRUk7UUFGSixBQUVnQjtRQUZoQixBQUU4QjtRQUY5QixBQUUwQztRQUYxQyxBQUVzRDtRQUZ0RCxBQUVpRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOi93b3Jrc3BhY2UvcmVhY3QtcmVkdXgtbmV4dCJ9