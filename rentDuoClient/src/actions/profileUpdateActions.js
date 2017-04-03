import axios from 'axios';

export function profileUpdateRequest(userData) {
  return dispatch => {
    return axios.put('/api/users', userData);
  }
}

export function getUser(id) {
  return dispatch => {
    return axios.get(`/api/users/${id}`);
  }
}
