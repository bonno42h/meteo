import React, { useState, useEffect } from 'react';
import { loadPagedData, loadInfiniteData } from './Table.utils';
import Context from './Context';
import Header from './Header/Header';
import TableHeader from './TableHeader/TableHeader';
import Grid from './Grid/Grid';
import Footer from './Footer/Footer';
import Spinner from './common/Spinner/Spinner';
import styles from './Table.module.scss';

const { Provider } = Context;

const Table = () => {
  const [pagedDataRequest, setPagedDataRequest] = useState({
    data: [],
    isLoading: true,
    error: null,
    hasLoaded: false,
  });
  const [infiniteDataRequest, setInfiniteDataRequest] = useState({
    data: [],
    isLoading: true,
    error: null,
    hasLoaded: false,
  });
  const [sortRequest, setSortRequest] = useState({
    sortBy: 'name',
    order: 'ASC',
  });
  const [selectedPage, setSelectedPage] = useState(0);
  const [recordLimit, setRecordLimit] = useState(10);
  const [infiniteAmountToDisplay, setInfiniteAmountToDisplay] = useState(0);
  const { sortBy, order } = sortRequest;
  const pagedParams = {
    $limit: recordLimit,
    $order: `\`${sortBy}\` ${order}`,
    $offset: selectedPage * recordLimit,
  };
  const infiniteParams = {
    $limit: 30,
    $order: `\`${sortBy}\` ${order}`,
    $offset: infiniteAmountToDisplay,
  };
  const [isInfiniteScroll, setIsInfiniteScroll] = useState(false);

  if (isInfiniteScroll) {
    window.onscroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setInfiniteAmountToDisplay(infiniteAmountToDisplay + 30);
        window.scrollBy(0, -10);
      }
    };
  }

  const { data, isLoading, hasLoaded } = isInfiniteScroll ? infiniteDataRequest : pagedDataRequest;

  useEffect(() => {
    if (isInfiniteScroll) {
      loadInfiniteData({ params: infiniteParams, isInfiniteScroll, setInfiniteDataRequest });
    } else {
      loadPagedData({ params: pagedParams, setPagedDataRequest });
    }
  }, [selectedPage, sortRequest, recordLimit, isInfiniteScroll, infiniteAmountToDisplay]);


  return (
    <>
      <Provider
        value={{
          sortRequest,
          setSortRequest,
          data,
          setPagedDataRequest,
          setInfiniteDataRequest,
          setSelectedPage,
          isInfiniteScroll,
          setIsInfiniteScroll,
          setInfiniteAmountToDisplay,
        }}
      >
        <div className={styles.root}>
          <Header />
          <table cellPadding="0" cellSpacing="0" className={styles.table}>
            {hasLoaded && <TableHeader />}
            {!isLoading && !isInfiniteScroll && (
              <Grid data={data} />
            )}
            {isInfiniteScroll && <Grid data={data} />}
          </table>
          {(!!isLoading || !hasLoaded) && <Spinner />}
          {hasLoaded && !isInfiniteScroll && (
            <Footer
              setSelectedPage={setSelectedPage}
              recordLimit={recordLimit}
              selectedPage={selectedPage}
              setRecordLimit={setRecordLimit}
            />
          )}
        </div>
      </Provider>
    </>
  );
};

export default Table;
