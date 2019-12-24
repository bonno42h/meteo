import { getRecordCount } from 'api/data';

export const loadRecordCount = async (setRecordCount) => {
  try {
    const { data } = await getRecordCount();

    setRecordCount(data[0].count);
  } catch (error) {
    console.log(error);
  }
};

export const handleRecordLimitChange = ({ event, setRecordLimit, setSelectedPage }) => {
  setRecordLimit(event.target.value);
  setSelectedPage(0);
};
