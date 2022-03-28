import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';

import UserList from '.';

import STORE from '../../store/Store';
import { FETCH_SUCCESS } from '../../actions';
import MOCK_DATA from '../../constants/testData';

// utils
import { checkKeyValue } from '../../utils';

beforeAll(() => STORE.dispatch({ type: FETCH_SUCCESS, payload: MOCK_DATA }));
beforeEach(jest.resetAllMocks);
afterEach(cleanup);

it('render default', () => {
  const { getByText, getByTestId } = render(
    <Provider store={STORE}>
      <UserList />
    </Provider>
  );

  MOCK_DATA.forEach(user => {
    const nameToCheck =
      checkKeyValue(user, 'name') ||
      checkKeyValue(user, 'username') ||
      checkKeyValue(user, 'email') ||
      ('company' in user && checkKeyValue(user.company, 'name')) ||
      checkKeyValue(user, 'website');

    expect(getByText(nameToCheck)).toBeDefined();
  });
  expect(getByTestId('user-filter')).toBeDefined();
});

it('handle filter text', () => {
  const { queryByText, getByTestId } = render(
    <Provider store={STORE}>
      <UserList />
    </Provider>
  );

  fireEvent.change(getByTestId('user-filter'), { target: { value: 'Erv' } });

  expect(queryByText(MOCK_DATA[0].name)).toBeFalsy();
});

it('handle filter text', () => {
  const { queryByText, getByTestId } = render(
    <Provider store={STORE}>
      <UserList />
    </Provider>
  );

  fireEvent.change(getByTestId('user-filter'), { target: { value: 'Erv' } });

  expect(queryByText(MOCK_DATA[0].name)).toBeFalsy();
});

it('handle click', () => {
  const { queryAllByTestId } = render(
    <Provider store={STORE}>
      <UserList />
    </Provider>
  );

  fireEvent.click(queryAllByTestId('user-row')[0]);

  expect(STORE.getState().selectedUser.id).toBe(MOCK_DATA[0].id);
});
