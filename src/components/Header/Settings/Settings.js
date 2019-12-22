import React, { useState, useContext } from 'react';
import Switch from 'react-switch';
import { MdSettings } from 'react-icons/md';
import { Context } from '../../Context';
import styles from './Settings.module.scss';

const Settings = () => {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const { isInfiniteScroll, setIsInfiniteScroll } = useContext(Context);

  return (
    <div className={styles.root}>
      {!settingsVisible && (
        <MdSettings
          className={styles.settingsIcon}
          onClick={() => setSettingsVisible(true)}
        />
      )}
      {!!settingsVisible && (
        <div className={styles.settingsContainer}>
          <button type="button" onClick={() => setSettingsVisible(!settingsVisible)}>
            X
          </button>
          <label className={styles.label}>
            <span>Infinite scroll</span>
            <Switch onChange={() => setIsInfiniteScroll(!isInfiniteScroll)} checked={isInfiniteScroll} />
          </label>
        </div>
      )}
    </div>
  );
};

export default Settings;
