'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactGoogleMaps = require('react-google-maps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\workspace\\react-redux-next\\components\\google_map.js';


var MyMapComponent = (0, _recompose.compose)((0, _recompose.withProps)({
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg',
  loadingElement: _react2.default.createElement('div', { style: { height: '100%' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }),
  containerElement: _react2.default.createElement('div', { className: 'google-map-loader-container', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }),
  mapElement: _react2.default.createElement('div', { style: { height: '100%' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })
}), _reactGoogleMaps.withScriptjs, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(_reactGoogleMaps.GoogleMap, { defaultZoom: 8, defaultCenter: { lat: props.lat, lng: props.lon }, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, props.lat), _react2.default.createElement(_reactGoogleMaps.Marker, { position: { lat: props.lat, lng: props.lon }, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }));
});

exports.default = MyMapComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdvb2dsZV9tYXAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJjb21wb3NlIiwid2l0aFByb3BzIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsIkdvb2dsZU1hcCIsIk1hcmtlciIsIk15TWFwQ29tcG9uZW50IiwiZ29vZ2xlTWFwVVJMIiwibG9hZGluZ0VsZW1lbnQiLCJoZWlnaHQiLCJjb250YWluZXJFbGVtZW50IiwibWFwRWxlbWVudCIsImxhdCIsInByb3BzIiwibG5nIiwibG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFTOztBQUNsQixBQUNFLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7O0FBR0YsSUFBTTtnQkFDTSxBQUNNLEFBQ2Q7eURBQXFCLE9BQU8sRUFBRSxRQUFkLEFBQVksQUFBVTtnQkFBdEI7a0JBRlIsQUFFUSxBQUNoQjtBQURnQjtHQUFBOzJEQUNPLFdBQUwsQUFBZTtnQkFBZjtrQkFIVixBQUdVLEFBQ2xCO0FBRGtCO0dBQUE7cURBQ0QsT0FBTyxFQUFFLFFBQWQsQUFBWSxBQUFVO2dCQUF0QjtrQkFMTyxBQUNyQixBQUFVLEFBSUksQUFFZCxBQUNBO0FBSGM7R0FBQTtBQUpKLEFBQ1IsQ0FERixrRUFRQSxpQkFBQTt5QkFDQSxBQUFDLDRDQUFVLGFBQVgsQUFBd0IsR0FBRyxlQUFlLEVBQUUsS0FBSyxNQUFQLEFBQWEsS0FBSyxLQUFLLE1BQWpFLEFBQTBDLEFBQTZCO2dCQUF2RTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFPO0FBQVA7QUFBQSxXQURGLEFBQ0UsQUFBYSxBQUNiLHNCQUFBLEFBQUMseUNBQU8sVUFBVSxFQUFFLEtBQUssTUFBUCxBQUFhLEtBQUssS0FBSyxNQUF6QyxBQUFrQixBQUE2QjtnQkFBL0M7a0JBSEYsQUFDQSxBQUVFO0FBQUE7O0FBWkosQUFBdUIsQUFnQnZCLENBaEJ1Qjs7a0JBZ0J2QixBQUFlIiwiZmlsZSI6Imdvb2dsZV9tYXAuanMiLCJzb3VyY2VSb290IjoiQzovd29ya3NwYWNlL3JlYWN0LXJlZHV4LW5leHQifQ==