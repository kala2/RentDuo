import axios from 'axios';

export function searchRequest(query) {
  return dispatch => {
    return axios.get('/api/search', query);
  }
}
