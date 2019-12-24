import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/common/Spinner/Spinner';
import TableHeader from './TableHeader/TableHeader';
import Grid from './Grid/Grid';
import styles from './Table.module.scss';

const Table = ({
  hasLoaded,
  data,
  isLoading,
  isInfiniteScroll,
}) => (
  <div>
    <table cellPadding="0" cellSpacing="0" className={styles.table}>
      {hasLoaded && <TableHeader />}
      {!isLoading && !isInfiniteScroll && (
        <Grid data={data} />
      )}
      {isInfiniteScroll && <Grid data={data} />}
    </table>
    {(!!isLoading || !hasLoaded) && <Spinner />}
  </div>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  hasLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isInfiniteScroll: PropTypes.bool.isRequired,
};

export default Table;
