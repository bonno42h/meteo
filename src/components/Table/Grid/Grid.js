import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from './Row/Row';

const Grid = ({ data }) => {
  const [highlightedRow, setHighlightedRow] = useState(null);

  return (
    <tbody style={{ transition: 'transform 300ms ease-in-out' }}>
      {data.map((rowData) => (
        <Row setHighlightedRow={setHighlightedRow} highlightedRow={highlightedRow} key={rowData.id} rowData={rowData} />
      ))}
    </tbody>
  );
};

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Grid;
