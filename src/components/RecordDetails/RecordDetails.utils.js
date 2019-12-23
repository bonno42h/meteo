import { getRecordById } from '../../api/data';

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
      error: null,
    });
  } catch (error) {
    setRecordDataRequest({
      data: [],
      isLoading: false,
      error,
    });
  }
};
