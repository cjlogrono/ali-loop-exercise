import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';

import UserProfile from '.';

import STORE from '../../store/Store';
import { selectUser } from '../../actions';
import MOCK_DATA from '../../constants/testData';

beforeAll(() => STORE.dispatch(selectUser(MOCK_DATA[0])));
beforeEach(jest.resetAllMocks);
afterEach(cleanup);

jest.mock('../../component/UserInfo', () => () => <p>UserInfo-component</p>);
jest.mock('../../component/ContactUser', () => () => (
  <p>ContactUser-component</p>
));
jest.mock('../../component/UserLocation', () => () => (
  <p>UserLocation-component</p>
));

it('render default', async () => {
  const { getByText, getByTestId } = render(
    <Provider store={STORE}>
      <UserProfile />
    </Provider>
  );

  expect(getByText('User Profile')).toBeDefined();
  expect(getByText('UserInfo-component')).toBeDefined();
  expect(getByText('ContactUser-component')).toBeDefined();
  expect(getByText('UserLocation-component')).toBeDefined();
  expect(getByTestId('back-button')).toBeDefined();
});

it('handle back button click', async () => {
  const { getByTestId } = render(
    <Provider store={STORE}>
      <UserProfile />
    </Provider>
  );

  fireEvent.click(getByTestId('back-button'));

  expect(STORE.getState().selectedUser).toBe(null);
});
