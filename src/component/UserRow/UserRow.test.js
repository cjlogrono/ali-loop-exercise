import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import UserRow from '.';

import MOCK_DATA from '../../constants/testData';

const handler = jest.fn();

const props = {
  user: MOCK_DATA[0],
  handler
};

it('render odd row', () => {
  const { getByText, getByTestId } = render(<UserRow {...props} evenRow />);

  expect(getByText(MOCK_DATA[0].name[0])).toBeDefined();
  expect(getByText(MOCK_DATA[0].name)).toBeDefined();
  expect(getByTestId('user-row').style['background-color']).toBe(
    'rgb(243, 246, 244)'
  );
});

it('render even row', () => {
  const { getByTestId } = render(<UserRow {...props} evenRow={false} />);

  expect(getByTestId('user-row').style['background-color']).toBe(
    'rgb(249, 250, 249)'
  );
});

it('toggle hover', async () => {
  const { getByTestId } = render(<UserRow {...props} evenRow={false} />);

  fireEvent.mouseOver(getByTestId('user-row'));

  await waitForElement(() => getByTestId('user-row-hover'));
  expect(getByTestId('user-row-hover').style['background-color']).toBe(
    'rgb(249, 149, 20)'
  );

  fireEvent.mouseLeave(getByTestId('user-row-hover'));

  await waitForElement(() => getByTestId('user-row'));
  expect(getByTestId('user-row').style['background-color']).toBe(
    'rgb(249, 250, 249)'
  );
});

it('trigger click', async () => {
  const { getByTestId } = render(<UserRow {...props} evenRow={false} />);

  fireEvent.click(getByTestId('user-row'));

  expect(handler).toHaveBeenCalled();
  expect(handler).toHaveBeenCalledTimes(1);

  fireEvent.keyDown(getByTestId('user-row'));

  expect(handler).toHaveBeenCalled();
  expect(handler).toHaveBeenCalledTimes(2);
});
