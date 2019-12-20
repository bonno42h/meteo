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

  const payload = {
    $limit: 20,
  };

  useEffect(() => {
    loadData({ params: payload, setDataRequest });
  }, []);

  return (
    <>
      {!dataRequest.isLoading && (
        <table>
          <Header data={dataRequest.data} setDataRequest={setDataRequest} />
          <Grid data={dataRequest.data} />
        </table>
      )}
    </>
  );
};

export default Table;
