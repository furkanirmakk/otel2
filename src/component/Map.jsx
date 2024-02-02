import React from 'react';

function GoogleMap() {

  const mapContainerStyle = {
    height: '400px',
    width: '80%',
    margin: '0 auto',
    border: '5px solid #2F343A', // Çerçeve rengi ve kalınlığı
    borderRadius: '10px', // Çerçeve köşe yuvarlaklığı
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Gölge rengi ve büyüklüğü
    marginTop: '10px', 
    marginBottom:'10px',
  };
  return (
    <div style={mapContainerStyle}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.9878755933946!2d29.071410825898198!3d41.003638571351104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7a5a561f299%3A0x8289db0dae329643!2sWomco%20Butik%20Otel!5e0!3m2!1str!2str!4v1706686656335!5m2!1str!2str"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMap;