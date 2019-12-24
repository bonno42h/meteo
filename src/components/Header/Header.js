import React from 'react';
import meteorusLogo from 'assets/meteorus.png';
import Settings from './Settings/Settings';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <img src={meteorusLogo} alt="Logo" className={styles.logo} />
    <Settings />
  </header>
);

export default Header;
