import React from 'react';
import HeaderItem from './HeaderItem/HeaderItem';

const Header = () => (
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


export default Header;
