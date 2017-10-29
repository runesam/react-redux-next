import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div className='google-map-loader-container' />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.lat, lng: props.lon }}>
    <span>{props.lat}</span>
    <Marker position={{ lat: props.lat, lng: props.lon }} />
  </GoogleMap>
));

export default MyMapComponent;
