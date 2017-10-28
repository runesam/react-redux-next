'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchPosts = exports.fetchWeather = exports.selectBook = exports.FETCH_POSTS = exports.FETCH_WEATHER = undefined;

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

function fetchPosts() {
    var request = _axios2.default.get(PostsURL + '/posts' + PostsKey);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

exports.FETCH_WEATHER = FETCH_WEATHER;
exports.FETCH_POSTS = FETCH_POSTS;
exports.selectBook = selectBook;
exports.fetchWeather = fetchWeather;
exports.fetchPosts = fetchPosts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNcXGluZGV4LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwic2VsZWN0Qm9vayIsImJvb2siLCJ0eXBlIiwicGF5bG9hZCIsIkFQSV9LRVkiLCJST09UX1VSTCIsIkZFVENIX1dFQVRIRVIiLCJmZXRjaFdlYXRoZXIiLCJjaXR5IiwidXJsIiwicmVxdWVzdCIsImdldCIsIlBvc3RzVVJMIiwiUG9zdHNLZXkiLCJGRVRDSF9QT1NUUyIsImZldGNoUG9zdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7QUFFUCxTQUFBLEFBQVMsV0FBVCxBQUFvQixNQUFNLEFBQ3RCOztjQUFPLEFBQ0csQUFDTjtpQkFGSixBQUFPLEFBRU0sQUFFaEI7QUFKVSxBQUNIOzs7QUFLUjtBQUNBLElBQU0sVUFBTixBQUFnQjtBQUNoQixJQUFNLHNFQUFOLEFBQTBFO0FBQzFFLElBQU0sZ0JBQU4sQUFBc0I7O0FBRXRCLFNBQUEsQUFBUyxhQUFULEFBQXNCLE1BQU0sQUFDeEI7UUFBTSxNQUFBLEFBQVMsbUJBQWYsQUFBNkIsQUFDN0I7UUFBTSxVQUFVLGdCQUFBLEFBQU0sSUFBdEIsQUFBZ0IsQUFBVSxBQUMxQjs7Y0FBTyxBQUNHLEFBQ047aUJBRkosQUFBTyxBQUVNLEFBRWhCO0FBSlUsQUFDSDs7O0FBS1I7QUFDQSxJQUFNLFdBQU4sQUFBaUI7QUFDakIsSUFBTSxXQUFOLEFBQWlCO0FBQ2pCLElBQU0sY0FBTixBQUFvQjs7QUFFcEIsU0FBQSxBQUFTLGFBQWEsQUFDbEI7UUFBTSxVQUFVLGdCQUFBLEFBQU0sSUFBTixBQUFhLHNCQUE3QixBQUFnQixBQUE4QixBQUM5Qzs7Y0FBTyxBQUNHLEFBQ047aUJBRkosQUFBTyxBQUVNLEFBRWhCO0FBSlUsQUFDSDtBQUtSOztRQUFBLEFBQ0k7UUFESixBQUNtQjtRQURuQixBQUVJO1FBRkosQUFFZ0I7UUFGaEIsQUFFOEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==