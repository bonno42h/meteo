import { getPagedData, getInfiniteData } from 'api/data';
import showNotification from 'utils/Notification/Notification';

export const loadPagedData = async ({ params = {}, setPagedDataRequest }) => {
  setPagedDataRequest((prevState) => ({
    ...prevState,
    isLoading: true,
  }));
  try {
    const { data } = await getPagedData(params);

    setPagedDataRequest({
      data,
      isLoading: false,
      hasLoaded: true,
    });
  } catch (error) {
    setPagedDataRequest({
      data: [],
      isLoading: false,
      hasLoaded: true,
    });
    showNotification({ error, type: 'error' });
  }
};

export const loadInfiniteData = async ({ params = {}, setInfiniteDataRequest }) => {
  setInfiniteDataRequest((prevState) => ({
    ...prevState,
    isLoading: true,
  }));
  try {
    const { data } = await getInfiniteData(params);

    setInfiniteDataRequest((prevState) => ({
      data: [...prevState.data, ...data],
      isLoading: false,
      hasLoaded: true,
    }));
  } catch (error) {
    setInfiniteDataRequest({
      data: [],
      isLoading: false,
      hasLoaded: false,
    });
    showNotification({ error, type: 'error' });
  }
};
