import React, { useState, useEffect, useContext } from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import Spinner from 'components/common/Spinner/Spinner';
import { Context } from '../Context';
import { loadRecordById } from './RecordDetails.utils';
import Item from './Item/Item';
import Map from './Map/Map';
import styles from './RecordDetails.module.scss';

const RecordDetails = ({ id }) => {
  const [recordDataRequest, setRecordDataRequest] = useState({
    data: [],
    isLoading: true,
  });

  const { setRecordToDisplay } = useContext(Context);

  const handleModalClose = () => {
    setRecordToDisplay((prevState) => ({
      ...prevState,
      isVisible: false,
    }));
  };

  useEffect(() => {
    loadRecordById({ id, setRecordDataRequest });
  }, [id]);

  const { data, isLoading } = recordDataRequest;

  return (
    <div>
      <div
        className={styles.modalOpenBackground}
        onClick={() => handleModalClose()}
      />
      <section className={styles.modalMain}>
        {!isLoading && (
          <div>
            <h1>
              {data.name}
            </h1>
            <button type="button" className={styles.close} onClick={() => handleModalClose()}>
              <div>
                X
              </div>
            </button>
            <div className={styles.itemGroup}>
              <Item value={data.id} label="ID" />
              <Item value={data.nametype} label="Nametype" />
              <Item value={data.recclass} label="Recclass" />
            </div>
            <div className={styles.itemGroup}>
              <Item value={data.mass} label="Mass, g" />
              <Item value={data.fall} label="Fall" />
              <Item value={format(new Date(data.year), 'yyyy-MM-dd')} label="Year" />
            </div>
            <div className={styles.itemGroup}>
              <Item value={data.reclat} label="Latitude" />
              <Item value={data.reclong} label="Longitude" />
            </div>
            <Map name={data.name} location={data.geolocation} />
          </div>
        )}
        {isLoading && <Spinner />}
      </section>
    </div>
  );
};

RecordDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RecordDetails;
