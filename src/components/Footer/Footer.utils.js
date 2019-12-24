import { getRecordCount } from 'api/data';
import showNotification from 'utils/Notification/Notification';

export const loadRecordCount = async (setRecordCount) => {
  try {
    const { data } = await getRecordCount();

    setRecordCount(data[0].count);
  } catch (error) {
    showNotification({ error, type: 'error' });
  }
};

export const handleRecordLimitChange = ({ event, setRecordLimit, setSelectedPage }) => {
  setRecordLimit(event.target.value);
  setSelectedPage(0);
};
