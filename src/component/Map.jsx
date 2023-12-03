import React, { useRef, useEffect } from 'react';
import { loadGoogleMaps } from '../utils/googleMapsLoader';

const Map = ({ address }) => {
  const mapRef = useRef();

  useEffect(() => {
    loadGoogleMaps(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 8,
      });

      // Adresi geocode edip haritaya ekleyin
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
          new window.google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
        } else {
          console.error('Geocode hatası:', status);
        }
      });
    });
  }, [address]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default Map;
