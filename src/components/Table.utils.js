import { getData } from '../api/data';

export const loadData = async ({ params = {}, setDataRequest }) => {
  try {
    const { data } = await getData(params);

    setDataRequest({
      data,
      isLoading: false,
      error: null,
    });
  } catch (error) {
    setDataRequest({
      data: [],
      isLoading: false,
      error,
    });
  }
};
