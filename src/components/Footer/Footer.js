import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { loadRecordCount } from './Footer.utils';
import Pagination from './Pagination/Pagination';
import styles from './Footer.module.scss';

const Footer = ({
  selectedPage,
  setSelectedPage,
  recordLimit,
  setRecordLimit,
}) => {
  const [recordCount, setRecordCount] = useState(null);
  const totalPages = Math.ceil(recordCount / recordLimit);

  useEffect(() => {
    loadRecordCount(setRecordCount);
  }, []);
  return (
    <footer className={styles.root}>
      <div>
        Page&nbsp;
        {selectedPage + 1}
        /
        {totalPages}
      </div>
      <Pagination selectedPage={selectedPage} setSelectedPage={setSelectedPage} totalPages={totalPages} />
      <div>
        <div>
          Total records:&nbsp;
          {recordCount}
        </div>
        <div>
          Records per page:&nbsp;
          <select value={recordLimit} onChange={(event) => setRecordLimit(event.target.value)}>
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  selectedPage: PropTypes.number.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
  setRecordLimit: PropTypes.func.isRequired,
  recordLimit: PropTypes.number.isRequired,
};

export default Footer;
