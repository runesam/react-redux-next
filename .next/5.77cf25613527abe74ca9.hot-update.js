webpackHotUpdate(5,{

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchWeather = exports.selectBook = exports.FETCH_WEATHER = undefined;

var _axios = __webpack_require__(476);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\workspace\\react-redux-next\\actions\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\workspace\\react-redux-next\\actions\\index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43N2NmMjU2MTM1MjdhYmU3NGNhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz82YzNmY2I3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBUElfS0VZID0gJzhlN2U1YWQ5MWI2YWI4Y2VlMjg2NjAyN2ZmNjQ5MWQxJztcclxuY29uc3QgUk9PVF9VUkwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/YXBwaWQ9JHtBUElfS0VZfWA7XHJcblxyXG5jb25zdCBGRVRDSF9XRUFUSEVSID0gJ0ZFVENIX1dFQVRIRVInO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0Qm9vayhib29rKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdCT09LX1NFTEVDVEVEJyxcclxuICAgICAgICBwYXlsb2FkOiBib29rXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFdlYXRoZXIoY2l0eSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7Uk9PVF9VUkx9JnE9JHtjaXR5fWA7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MuZ2V0KHVybCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEZFVENIX1dFQVRIRVIsXHJcbiAgICAgICAgcGF5bG9hZDogcmVxdWVzdFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgRkVUQ0hfV0VBVEhFUiwgc2VsZWN0Qm9vaywgZmV0Y2hXZWF0aGVyIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBO0FBQ0E7QUFDQTs7QUFHQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUFBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=