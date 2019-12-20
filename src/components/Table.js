import React, { useState, useEffect } from 'react';
import { loadData } from './Table.utils';

const Table = () => {
  const [dataRequest, setDataRequest] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  const payload = {
    $limit: 200,
  };

  useEffect(() => {
    loadData({ params: payload, setDataRequest });
  }, []);

console.log('meeeow', dataRequest);

  return <div>test</div>;
};

export default Table;
