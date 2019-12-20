import React from 'react';
import PropTypes from 'prop-types';

const HeaderItem = ({ label, itemKey }) => (
  <th onClick={() => console.log(itemKey)}>{label}</th>
);

const Header = () => {
  return (
    <thead>
      <tr>
        <HeaderItem label="ID" itemKey="id" />
        <HeaderItem label="Name" itemKey="name" />
        <HeaderItem label="Type" itemKey="nametype" />
        <HeaderItem label="Class" itemKey="recclass" />
        <HeaderItem label="Mass, g" itemKey="mass" />
        <HeaderItem label="Fall" itemKey="fall" />
        <HeaderItem label="Year" itemKey="year" />
      </tr>
    </thead>
  );
};

HeaderItem.propTypes= {
  label: PropTypes.string.isRequired,
  itemKey: PropTypes.string.isRequired,
};

export default Header;
