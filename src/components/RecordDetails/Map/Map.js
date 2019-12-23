import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import meteorusLogo from '../../../assets/favicon.ico';
import styles from './Map.module.scss';

const MeteorPinpoint = ({ text }) => (
  <div className={styles.pinpointContainer}>
    <img src={meteorusLogo} alt="Logo" className={styles.logo} />
    <span>
      {text}
    </span>
  </div>
);

const Map = ({ name, location }) => {
  const latitude = parseFloat(location.latitude);
  const longitude = parseFloat(location.longitude);

  return (
    <div className={styles.root} style={{ height: '20vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={9}
      >
        <MeteorPinpoint
          lat={latitude}
          lng={longitude}
          text={name}
        />
      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.string,
    longitude: PropTypes.string,
  }).isRequired,
};

MeteorPinpoint.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Map;
