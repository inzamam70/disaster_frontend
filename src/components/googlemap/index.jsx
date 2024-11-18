// GoogleMapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 23.710400,  // Replace with your office's latitude
  lng: 90.407440  // Replace with your office's longitude
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey=" "> 
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
