import axios from 'axios';

const baseURL = 'https://api.github.com';

const getHeaders = (headers) => {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return Object.assign({}, defaultHeaders, headers);
};
const request = {
  get: (url, headers = {}) => {
    return axios({
      method: 'GET',
      url: `${baseURL}${url}`,
      headers: getHeaders(headers),
    });
  },
};

export default request;
