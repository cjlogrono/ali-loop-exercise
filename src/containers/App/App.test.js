import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  waitForElementToBeRemoved
} from '@testing-library/react';

import App from '.';

import STORE from '../../store/Store';
import { selectUser } from '../../actions';
import MOCK_DATA from '../../constants/testData';

jest.mock('axios', () => {
  return {
    get: jest.fn()
  };
});
jest.mock('../UserList', () => () => <p>UserList-container</p>);
jest.mock('../UserProfile', () => () => <p>UserProfile-container</p>);
jest.mock('../../component/LoadingScreen', () => () => (
  <p>LoadingScreen-component</p>
));
jest.mock('../../component/ErrorScreen', () => () => (
  <p>ErrorScreen-component</p>
));
jest.mock('../../component/EmptyList', () => () => <p>EmptyList-component</p>);

beforeEach(jest.resetAllMocks);
afterEach(() => {
  jest.resetAllMocks();
  cleanup();
});

it('render user list', async () => {
  axios.get.mockResolvedValueOnce({ data: MOCK_DATA });

  const { getByText, queryByText } = render(
    <Provider store={STORE}>
      <Suspense fallback={<p>load</p>}>
        <App />
      </Suspense>
    </Provider>
  );

  if (queryByText('load')) {
    await waitForElementToBeRemoved(() => getByText('load'));
  }

  expect(getByText('UserList-container')).toBeDefined();
});

it('render user list empty', async () => {
  axios.get.mockResolvedValueOnce({ data: [] });

  const { getByText, queryByText } = render(
    <Provider store={STORE}>
      <Suspense fallback={<p>load</p>}>
        <App />
      </Suspense>
    </Provider>
  );

  if (queryByText('load')) {
    await waitForElementToBeRemoved(() => getByText('load'));
  }

  if (queryByText('LoadingScreen-component')) {
    await waitForElementToBeRemoved(() => getByText('LoadingScreen-component'));
  }

  expect(getByText('EmptyList-component')).toBeDefined();
});

it('render loading', async () => {
  axios.get.mockRejectedValueOnce();

  const { getByText, queryByText } = render(
    <Provider store={STORE}>
      <Suspense fallback={<p>load</p>}>
        <App />
      </Suspense>
    </Provider>
  );

  if (queryByText('load')) {
    await waitForElementToBeRemoved(() => getByText('load'));
  }

  expect(getByText('LoadingScreen-component')).toBeDefined();
});

it('render loaded error', async () => {
  axios.get.mockRejectedValueOnce();

  const { getByText, queryByText } = render(
    <Provider store={STORE}>
      <Suspense fallback={<p>load</p>}>
        <App />
      </Suspense>
    </Provider>
  );

  if (queryByText('load')) {
    await waitForElementToBeRemoved(() => getByText('load'));
  }

  expect(getByText('ErrorScreen-component')).toBeDefined();
});

it('render user profile', async () => {
  axios.get.mockResolvedValueOnce({ data: MOCK_DATA });

  const { queryByText, getByText } = render(
    <Provider store={STORE}>
      <Suspense fallback={<p>load</p>}>
        <App />
      </Suspense>
    </Provider>
  );

  if (queryByText('load')) {
    await waitForElementToBeRemoved(() => getByText('load'));
  }

  STORE.dispatch(selectUser(MOCK_DATA[0]));

  await waitForElement(() => getByText('UserProfile-container'));
});
