import React, { useState, useEffect, createContext } from 'react';
import { loadData } from './Table.utils';
import Header from './Header/Header';
import Grid from './Grid/Grid';
import Footer from './Footer/Footer';
import Spinner from './common/Spinner/Spinner';
import styles from './Table.module.scss'

export const Context = createContext();

const Table = () => {
  const [dataRequest, setDataRequest] = useState({
    data: [],
    isLoading: true,
    error: null,
  });
  const [sortRequest, setSortRequest] = useState({
    sortBy: 'name',
    order: 'ASC',
  });
  const [selectedPage, setSelectedPage] = useState(0);
  const [recordLimit, setRecordLimit]= useState(20);
  const { sortBy, order } = sortRequest;
  const params = {
    $limit: recordLimit,
    $order: `\`${sortBy}\` ${order}`,
    $offset: selectedPage * recordLimit,
  };

  useEffect(() => {
    loadData({ params, setDataRequest });
  }, [selectedPage, sortRequest]);

  return (
    <>
      <Context.Provider
        value={{
          sortRequest,
          setSortRequest,
          data: dataRequest.data,
          setDataRequest,
          setSelectedPage,
        }}
      >
        <table className={styles.root}>
          <Header />
          {!dataRequest.isLoading && (
            <Grid data={dataRequest.data} />
          )}
        </table>
        {!!dataRequest.isLoading && <Spinner />}
        <Footer setSelectedPage={setSelectedPage} recordLimit={recordLimit} selectedPage={selectedPage} />
      </Context.Provider>
    </>
  );
};

export default Table;
