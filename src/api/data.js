import axios from 'axios';

const DATA_URL = 'https://data.nasa.gov/resource/gh4g-9sfh.json';

export function getInfiniteData(params) {
  return axios.get(DATA_URL, { params });
}

export function getPagedData(params) {
  return axios.get(DATA_URL, { params });
}

export function getRecordCount() {
  return axios.get(`${DATA_URL}/?$select=count(*)`);
}

export function getRecordById(id) {
  return axios.get(`${DATA_URL}/id=${id}`);
}
