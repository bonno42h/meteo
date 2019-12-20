import React from 'react';
import format from 'date-fns/format'
import PropTypes from 'prop-types';
import styles from './Row.module.scss';

const Row = ({ rowData }) => {
  const dateParsed = rowData.year !== undefined ? new Date(rowData.year) : null;
  
  return (
    <tr className={styles.root}>
      <td className={styles.rowItem}>{rowData.id}</td>
      <td className={styles.rowItem}>{rowData.name}</td>
      <td className={styles.rowItem}>{rowData.nametype}</td>
      <td className={styles.rowItem}>{rowData.recclass}</td>
      <td className={styles.rowItem}>{rowData.mass}</td>
      <td className={styles.rowItem}>{rowData.fall}</td>
      <td className={styles.rowItem}>{dateParsed !== null ? format(dateParsed, 'yyyy') : '-'}</td>
    </tr>
  );
};

Row.propTypes = {
  rowData: PropTypes.shape({
    fall: PropTypes.string.isRequired,
    geolocation: PropTypes.shape({}),
    id: PropTypes.string.isRequired,
    mass: PropTypes.string,
    name: PropTypes.string.isRequired,
    nametype: PropTypes.string.isRequired,
    recclass: PropTypes.string.isRequired,
    year: PropTypes.string,
  }).isRequired,
};

export default Row;
