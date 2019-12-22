import React, { useState, useEffect, createContext } from 'react';
import { loadData } from './Table.utils';
import Header from './Header/Header';
import Grid from './Grid/Grid';
import Footer from './Footer/Footer';
import Spinner from './common/Spinner/Spinner';
import meteorusLogo from '../assets/meteorus.png';
import styles from './Table.module.scss';

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
  const [recordLimit, setRecordLimit] = useState(10);
  const { sortBy, order } = sortRequest;
  const params = {
    $limit: recordLimit,
    $order: `\`${sortBy}\` ${order}`,
    $offset: selectedPage * recordLimit,
  };

  useEffect(() => {
    loadData({ params, setDataRequest });
  }, [selectedPage, sortRequest, recordLimit]);

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
        <div className={styles.root}>
          <img src={meteorusLogo} alt="Logo" className={styles.logo} />
          <table cellPadding="0" cellSpacing="0" className={styles.table}>
            <Header />
            {!dataRequest.isLoading && (
              <Grid data={dataRequest.data} />
            )}
          </table>
          {!!dataRequest.isLoading && <Spinner />}
          {!dataRequest.isLoading && (
            <Footer
              setSelectedPage={setSelectedPage}
              recordLimit={recordLimit}
              selectedPage={selectedPage}
              setRecordLimit={setRecordLimit}
            />
          )}
        </div>
      </Context.Provider>
    </>
  );
};

export default Table;
