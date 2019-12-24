import { getRecordById } from 'api/data';

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
    window.alert(error);
  }
};
