import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row/Row';

const Grid = ({ data }) => {
  return (
    <tbody>
      {data.map((rowData) => <Row key={rowData.id} rowData={rowData} />)}
    </tbody>
  );
};

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Grid;
