import { getUsers } from '../api';

export const FETCH_USERS = 'users:fetch';
export const FETCH_SUCCESS = 'users:success';
export const FETCH_ERROR = 'users:error';
export const SELECT_USER = 'users:select';
export const UNSELECT_USER = 'users:unselect';

export function fetchUsers() {
  return async dispatch => {
    dispatch({
      type: FETCH_USERS
    });
    getUsers()
      .then(res => {
        return dispatch({
          type: FETCH_SUCCESS,
          payload: res.data || []
        });
      })
      .catch(() => {
        return dispatch({
          type: FETCH_ERROR
        });
      });
  };
}

export const selectUser = user => ({
  type: SELECT_USER,
  payload: user
});

export const unselectUser = () => ({
  type: UNSELECT_USER
});
