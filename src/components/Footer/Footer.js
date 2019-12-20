import React, { useState, useEffect } from 'react';
import {
  loadRecordCount,
  firstPage,
  prevPage,
  nextPage,
  lastPage,
} from './Footer.utils';

const Footer = ({ selectedPage, setSelectedPage, recordLimit }) => {
  const [recordCount, setRecordCount] = useState(null);
  const totalPages = Math.ceil(recordCount / recordLimit);

  useEffect(() => {
    loadRecordCount(setRecordCount);
  }, []);
  return (
    <>
      {selectedPage !== 0 && (
        <div>
          selectedPage
        </div>
      )}
      <div>Page {selectedPage + 1} / {totalPages}</div>
      <div onClick={() => firstPage({ setSelectedPage })}>first</div>
      <div onClick={() => prevPage({ setSelectedPage })}>prev</div>
      <div>{selectedPage + 1}</div>
      <div onClick={() => nextPage({ setSelectedPage })}>next</div>
      <div onClick={() => lastPage({ setSelectedPage, totalPages })}>last</div>
      <div> Total records: {recordCount}</div>
    </>
  );
};

export default Footer;
