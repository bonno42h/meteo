import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './Item.module.scss';

export const Item = ({ label, value }) => (
  <CopyToClipboard text={value}>
    <div className={styles.root} title="Click to copy">
      <div>
        <label className={styles.label}>
          {label}
        </label>
      </div>
      <div className={styles.itemContainer}>
        <span>{value}</span>
      </div>
    </div>
  </CopyToClipboard>
);

Item.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Item.defaultProps = {
  value: null,
};

export default Item;
