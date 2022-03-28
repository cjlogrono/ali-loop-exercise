import React from 'react';
import { render } from '@testing-library/react';

import ErrorScreen from '.';

it('render correct', async () => {
  const { getByText, getByTestId } = render(<ErrorScreen />);

  expect(getByText('Error fetching users... try again later.')).toBeDefined();
  expect(getByTestId('error-icon')).toBeDefined();
});
