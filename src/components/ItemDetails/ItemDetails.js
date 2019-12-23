import React, { useState, useEffect } from 'react';
import { loadRecordById } from './ItemDetails.utils';
import styles from './ItemDetails.module.scss';

const ItemDetails = ({ id }) => {
  const [recordDataRequest, setRecordDataRequest] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    loadRecordById({ id, setRecordDataRequest });
  }, []);

  const { data, isLoading } = recordDataRequest;

  return (
    <div>
      <section className={styles.modalMain}>
        {data.name}
      </section>
    </div>
  );
};

export default ItemDetails;
