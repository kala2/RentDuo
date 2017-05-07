import axios from 'axios';
export const SET_USER = 'SET_USER';

export function profileUpdateRequest(userData, id) {
  return dispatch => {
    return axios.put(`/api/users/${id}`, userData);
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
