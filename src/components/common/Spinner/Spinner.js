import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.module.scss';

export const Spinner = ({ rootClassName }) => (
  <div className={rootClassName}>
    <div className={styles.ldsRing}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

Spinner.propTypes = {
  rootClassName: PropTypes.string,
};

Spinner.defaultProps = {
  rootClassName: undefined,
};

export default Spinner;
