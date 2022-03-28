import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';

import { fetchUsers, selectUser, unselectUser } from '.';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import MOCK_DATA from '../constants/testData';

jest.mock('axios', () => {
  return {
    get: jest.fn()
  };
});

afterEach(() => {
  jest.resetAllMocks();
});

it('fetchUsers success', () => {
  axios.get.mockResolvedValueOnce({ data: MOCK_DATA });

  const expectedActions = [
    { type: 'users:fetch' },
    {
      type: 'users:success',
      payload: MOCK_DATA
    }
  ];

  const store = mockStore({});

  return store.dispatch(fetchUsers()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

it('fetchUsers success null data', () => {
  axios.get.mockResolvedValueOnce({ data: null });

  const expectedActions = [
    { type: 'users:fetch' },
    {
      type: 'users:success',
      payload: []
    }
  ];

  const store = mockStore({});

  return store.dispatch(fetchUsers()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

it('fetchUsers error', () => {
  axios.get.mockRejectedValueOnce();

  const expectedActions = [{ type: 'users:fetch' }, { type: 'users:error' }];

  const store = mockStore({});

  return store.dispatch(fetchUsers()).catch(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

it('selectUser', () => {
  expect(selectUser('cj')).toEqual({
    type: 'users:select',
    payload: 'cj'
  });
});

it('unselectUser', () => {
  expect(unselectUser()).toEqual({
    type: 'users:unselect'
  });
});
