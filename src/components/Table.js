import React, { useState, useEffect } from 'react';
import { loadData } from './Table.utils';
import Header from './Header/Header';
import Grid from './Grid/Grid';

const Table = () => {
  const [dataRequest, setDataRequest] = useState({
    data: [],
    isLoading: true,
    error: null,
  });
  const [sortRequest, setSortRequest] = useState({
    sortBy: 'year',
    order: 'DESC',
  });

  const { sortBy, order } = sortRequest;
  const params = {
    $limit: 20,
    $order: `\`${sortBy}\` ${order}`,
  };

  useEffect(() => {
    loadData({ params, setDataRequest });
  }, []);

  return (
    <>
      {!dataRequest.isLoading && (
        <table>
          <Header
            sortRequest={sortRequest}
            setSortRequest={setSortRequest}
            data={dataRequest.data}
            setDataRequest={setDataRequest}
          />
          <Grid data={dataRequest.data} />
        </table>
      )}
    </>
  );
};

export default Table;
