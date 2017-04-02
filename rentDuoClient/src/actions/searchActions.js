import axios from 'axios';

export function searchRequest(userData) {
  return dispatch => {
    return axios.post('/api/search', userData);
  }
}
