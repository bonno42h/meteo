import React from 'react';
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


export default Spinner;
