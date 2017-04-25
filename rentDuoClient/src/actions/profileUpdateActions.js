import axios from 'axios';
export const SET_USER = 'SET_USER';

export function profileUpdateRequest(userData) {
  return dispatch => {
    return axios.put('/api/users', userData);
  }
}

export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}

export function isUserExists(id) {
  return dispatch => {
    return axios.get(`/api/users/${id}`);
  }
}

export function getUser() {
  return dispatch => {
    return axios.get('/api/user')
    .then(res => res.data)
    .then(data => dispatch(setUser(data.user)));
  }
}
