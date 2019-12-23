import { getRecordById } from '../../api/data';

export const loadRecordById = async ({ id, setRecordDataRequest }) => {
  try {
    const { data } = await getRecordById(id);

    setRecordDataRequest({
      data,
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
