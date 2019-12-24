import React, { useState, useEffect } from 'react';
import { loadPagedData, loadInfiniteData } from './Landing.utils';
import Context from './Context';
import Header from './Header/Header';
import Table from './Table/Table';
import Footer from './Footer/Footer';
import RecordDetails from './RecordDetails/RecordDetails';
import styles from './Landing.module.scss';

const { Provider } = Context;

const Landing = () => {
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
  const [recordToDisplay, setRecordToDisplay] = useState({
    id: '',
    isVisible: false,
  });
  const [sortRequest, setSortRequest] = useState({
    sortBy: 'name',
    order: 'ASC',
  });
  const [selectedPage, setSelectedPage] = useState(0);
  const [recordLimit, setRecordLimit] = useState('10');
  const [infiniteAmountToDisplay, setInfiniteAmountToDisplay] = useState(null);
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
      }
    };
  }
  if (!isInfiniteScroll) {
    window.onscroll = {};
  }

  const { data, isLoading, hasLoaded } = isInfiniteScroll ? infiniteDataRequest : pagedDataRequest;

  useEffect(() => {
    if (isInfiniteScroll) {
      loadInfiniteData({ params: infiniteParams, isInfiniteScroll, setInfiniteDataRequest });
    } else {
      loadPagedData({ params: pagedParams, setPagedDataRequest });
    }
  }, [selectedPage, sortRequest, recordLimit, infiniteAmountToDisplay]);


  return (
    <>
      <Provider
        value={{
          sortRequest,
          setSortRequest,
          setPagedDataRequest,
          setInfiniteDataRequest,
          setSelectedPage,
          isInfiniteScroll,
          setIsInfiniteScroll,
          setInfiniteAmountToDisplay,
          setRecordToDisplay,
        }}
      >
        <div className={styles.root}>
          <Header />
          <Table hasLoaded={hasLoaded} data={data} isLoading={isLoading} isInfiniteScroll={isInfiniteScroll} />
          {recordToDisplay.isVisible && <RecordDetails id={recordToDisplay.id} />}
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

export default Landing;
