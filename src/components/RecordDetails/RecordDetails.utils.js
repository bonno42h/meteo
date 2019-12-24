import { getRecordById } from 'api/data';
import showNotification from 'utils/Notification/Notification';

export const loadRecordById = async ({ id, setRecordDataRequest }) => {
  setRecordDataRequest((prevState) => ({
    ...prevState,
    isLoading: true,
  }));

  try {
    const { data } = await getRecordById(id);

    setRecordDataRequest({
      data: data[0],
      isLoading: false,
    });
  } catch (error) {
    setRecordDataRequest({
      data: [],
      isLoading: false,
    });
    showNotification({ error, type: 'error' });
  }
};
