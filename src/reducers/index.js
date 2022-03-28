import INITIAL_STATE_STORE from '../constants/store';

import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_USERS,
  SELECT_USER,
  UNSELECT_USER
} from '../actions';

export default function candidatosReducer(
  state = INITIAL_STATE_STORE,
  { type, payload }
) {
  let updates = {};
  switch (type) {
    case FETCH_SUCCESS:
      updates = {
        loading: false,
        users: payload.filter(u => u !== null && u !== undefined)
      };
      break;

    case FETCH_USERS:
      updates = { loading: true };
      break;

    case FETCH_ERROR:
      updates = { loading: true, error: true };
      break;

    case SELECT_USER:
      updates = { selectedUser: payload };
      break;

    case UNSELECT_USER:
      updates = { selectedUser: null };
      break;

    default:
      return state;
  }

  return { ...state, ...updates };
}
