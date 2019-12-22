import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Context } from '../../Context';
import styles from './HeaderItem.module.scss';

const HeaderItem = ({ label, itemKey }) => {
  const {
    sortRequest,
    setSortRequest,
    setSelectedPage,
    setInfiniteDataRequest,
    setInfiniteAmountToDisplay,
  } = useContext(Context);
  const sortOrder = sortRequest.order === 'ASC' ? 'DESC' : 'ASC';
  const chevronDirection = sortRequest.order === 'ASC'
    ? <FiChevronUp className={styles.chevron} />
    : <FiChevronDown className={styles.chevron} />;

  return (
    <th
      onClick={() => {
        setSortRequest({
          sortBy: itemKey,
          order: itemKey !== sortRequest.sortBy ? 'ASC' : sortOrder,
        });
        setSelectedPage(0);
        setInfiniteDataRequest({
          data: [],
          isLoading: true,
          hasLoaded: true,
          error: null,
        });
        setInfiniteAmountToDisplay(0);
      }}
    >
      {label}
      {itemKey === sortRequest.sortBy ? chevronDirection : null}
    </th>
  );
};

HeaderItem.propTypes = {
  label: PropTypes.string.isRequired,
  itemKey: PropTypes.string.isRequired,
};

export default HeaderItem;
