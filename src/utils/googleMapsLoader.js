export const loadGoogleMaps = (callback) => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.onload = callback;
      document.head.appendChild(script);
    } else {
      callback();
    }
  };
  