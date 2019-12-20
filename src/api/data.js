import axios from 'axios';

const DATA_URL = 'https://data.nasa.gov/resource/gh4g-9sfh.json';

export function getData(params) {
  return axios.get(DATA_URL, { params });
}
