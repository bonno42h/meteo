import React, { useState, useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import Switch from 'react-switch';
import { MdSettings } from 'react-icons/md';
import { Context } from 'components/Context';
import styles from './Settings.module.scss';

const Settings = () => {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const { isInfiniteScroll, setIsInfiniteScroll, setInfiniteAmountToDisplay } = useContext(Context);
  const transitions = useTransition(settingsVisible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions.map(({ item, key, props }) => (item
    ? (
      <animated.div key={key} style={props} className={styles.root}>
        <div className={styles.settingsContainer}>
          <button type="button" onClick={() => setSettingsVisible(!settingsVisible)}>
            X
          </button>
          <label className={styles.label}>
            <span>Infinite scroll</span>
            <Switch
              onChange={() => {
                setIsInfiniteScroll(!isInfiniteScroll);
                setInfiniteAmountToDisplay((prevState) => {
                  if (prevState === null) {
                    return 0;
                  }
                  return prevState;
                });
              }}
              checked={isInfiniteScroll}
            />
          </label>
        </div>
      </animated.div>
    ) : (
      <animated.div key={key} style={props} className={styles.root}>
        <MdSettings
          className={styles.settingsIcon}
          onClick={() => setSettingsVisible(true)}
        />
      </animated.div>
    )));
};

export default Settings;
