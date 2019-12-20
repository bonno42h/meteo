import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../Table';
import { ReactComponent as ChevronUp } from '../../../assets/chevron-up.svg';
import { ReactComponent as ChevronDown } from '../../../assets/chevron-down.svg';

const HeaderItem = ({ label, itemKey }) => {
  const { sortRequest, setSortRequest, setSelectedPage } = useContext(Context);
  const sortOrder = sortRequest.order === 'ASC' ? 'DESC' : 'ASC';
  const chevronDirection = sortRequest.order === 'ASC' ? <ChevronUp /> : <ChevronDown />;

  return (
    <th
      onClick={() => {
        setSortRequest({
          sortBy: itemKey,
          order: itemKey !== sortRequest.sortBy ? 'ASC' : sortOrder,
        });
        setSelectedPage(0);
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
