import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'rc-notification';
import styles from './Notification.module.scss';

let notification = null;

Notification.newInstance({}, (n) => { notification = n; });

const NotificationContent = ({ error, type }) => (
  <div className={`${styles.root} ${styles[type]}`}>
    <span className={styles.notificationText}>{error.toString()}</span>
  </div>
);

function showNotification({ error, type }) {
  notification.notice({
    content: <NotificationContent type={type} error={error.toString()} />,
    duration: 10,
  });
}

NotificationContent.propTypes = {
  error: PropTypes.string.isRequired,
  type: PropTypes.string,
};

NotificationContent.defaultProps = {
  type: 'info',
};

export default showNotification;
