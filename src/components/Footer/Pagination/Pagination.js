import React from 'react';
import PropTypes from 'prop-types';
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronRight,
} from 'react-icons/fi';
import {
  firstPage,
  prevPage,
  nextPage,
  lastPage,
} from './Pagination.utils';
import styles from './Pagination.module.scss';

const Pagination = ({ selectedPage, setSelectedPage, totalPages }) => {
  const pagesToDisplay = [];

  for (let i = 0; i < totalPages; i += 1) {
    if (pagesToDisplay.length === 7) {
      break;
    }
    if (
      i - 2 === selectedPage
      || i - 1 === selectedPage
      || i === selectedPage
      || i + 1 === selectedPage
      || i + 2 === selectedPage
    ) {
      pagesToDisplay.push(i + 1);
    }
  }

  return (
    <div className={styles.pagination}>
      {selectedPage !== 0 && (
        <>
          {selectedPage !== 1 && (
            <button type="button" onClick={() => firstPage({ setSelectedPage })}>
              <FiChevronsLeft />
            </button>
          )}
          <button type="button" onClick={() => prevPage({ setSelectedPage })}>
            <FiChevronLeft />
          </button>
        </>
      )}
      {pagesToDisplay.map(
        (page) => (
          <button
            type="button"
            key={page + 1}
            onClick={() => setSelectedPage(page - 1)}
            className={page === selectedPage + 1 ? styles.selected : null}
          >
            {page}
          </button>
        )
      )}
      <button type="button" onClick={() => nextPage({ setSelectedPage })}>
        <FiChevronRight />
      </button>
      <button type="button" onClick={() => lastPage({ setSelectedPage, totalPages })}>
        <FiChevronsRight />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  selectedPage: PropTypes.number.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
