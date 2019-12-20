import { getRecordCount } from '../../api/data';

export const loadRecordCount = async (setRecordCount) => {
  try {
    const { data } = await getRecordCount();

    setRecordCount(data[0].count);
  } catch (error) {
    console.log(error);
  }
};

export const prevPage = ({ setSelectedPage }) => {
  setSelectedPage((prevState) => (prevState - 1));
};

export const nextPage = ({ setSelectedPage }) => {
  setSelectedPage((prevState) => (prevState + 1));
};

export const firstPage = ({ setSelectedPage }) => {
  setSelectedPage(0);
};

export const lastPage = ({ setSelectedPage, totalPages }) => {
  setSelectedPage(totalPages - 1);
};
