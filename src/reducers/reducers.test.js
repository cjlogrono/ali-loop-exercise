import reducer from '.';
import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_USERS,
  SELECT_USER,
  UNSELECT_USER
} from '../actions';

import INITIAL_STATE_STORE from '../constants/store';

import MOCK_DATA from '../constants/testData';

const defaultState = INITIAL_STATE_STORE;

it('handles init with unkown actions', () => {
  expect(reducer(undefined, { type: 'not_exist' })).toStrictEqual(defaultState);
});

it('handles unkown actions', () => {
  expect(reducer(defaultState, { type: 'not_exist' })).toStrictEqual(
    defaultState
  );
});

it('FETCH_ERROR', () => {
  expect(
    reducer(defaultState, {
      type: FETCH_ERROR
    })
  ).toStrictEqual({
    ...defaultState,
    loading: true,
    error: true
  });
});

it('FETCH_SUCCESS', () => {
  expect(
    reducer(defaultState, {
      type: FETCH_SUCCESS,
      payload: MOCK_DATA
    })
  ).toStrictEqual({
    ...defaultState,
    loading: false,
    users: MOCK_DATA
  });
});

it('FETCH_USERS', () => {
  expect(reducer(defaultState, { type: FETCH_USERS })).toStrictEqual({
    ...defaultState,
    loading: true
  });
});

it('SELECT_USER', () => {
  expect(
    reducer(defaultState, { type: SELECT_USER, payload: 'cj' })
  ).toStrictEqual({
    ...defaultState,
    selectedUser: 'cj'
  });
});

it('UNSELECT_USER', () => {
  expect(
    reducer(
      {
        ...defaultState,
        selectedUser: 'maya'
      },
      { type: UNSELECT_USER }
    )
  ).toStrictEqual({
    ...defaultState
  });
});
