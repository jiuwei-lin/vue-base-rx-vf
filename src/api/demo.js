/**
 * Axios: get todos
 */
import axios from 'axios';

const _BASE_URL = 'https://jsonplaceholder.typicode.com';

export default {
  getTodos() {
    return axios
      .get(`${_BASE_URL}/todos`)
      .then(resp => resp.data)
      .catch(err => err);
  }
};