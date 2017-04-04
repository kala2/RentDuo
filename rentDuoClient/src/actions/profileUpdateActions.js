import axios from 'axios';

export function profileUpdateRequest(userData) {
  return dispatch => {
    return axios.put('/api/users', userData);
  }
}

export function getUser() {
  return dispatch => {
    return axios.get('/api/user').then(res => dispatch({
      type: 'FETCH_PROFILE',
      data: res.data
    }));
  }
}
