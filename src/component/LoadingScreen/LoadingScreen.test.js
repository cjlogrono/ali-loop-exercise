import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';

import LoadingScreen from '.';

jest.mock('../../assets/loading.gif', () => 'gif');

it('render correct', async () => {
  const { getByTestId } = render(<LoadingScreen />);

  expect(getByTestId('Loading screen')).toBeDefined();
});
