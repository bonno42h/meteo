import React, { useContext } from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import Context from 'components/Context';
import styles from './Row.module.scss';

const Row = ({ rowData, highlightedRow, setHighlightedRow }) => {
  const dateParsed = rowData.year !== undefined ? new Date(rowData.year) : null;
  const { setRecordToDisplay } = useContext(Context);

  return (
    <tr
      className={`${rowData.id === highlightedRow ? styles.selectedRow : null} ${styles.root}`}
      onClick={() => {
        setHighlightedRow(rowData.id);
        setRecordToDisplay({
          id: rowData.id,
          isVisible: true,
        });
      }}
    >
      <td>{rowData.id}</td>
      <td>{rowData.name}</td>
      <td>{rowData.nametype}</td>
      <td>{rowData.recclass}</td>
      <td>{rowData.mass}</td>
      <td>{rowData.fall}</td>
      <td>{dateParsed !== null ? format(dateParsed, 'yyyy') : '-'}</td>
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
  highlightedRow: PropTypes.string,
  setHighlightedRow: PropTypes.func.isRequired,
};

Row.defaultProps = {
  highlightedRow: null,
};

export default Row;
