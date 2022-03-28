import React from 'react';
import { render } from '@testing-library/react';

import EmptyList from '.';

it('render correct', async () => {
  const { getByText, getByTestId } = render(<EmptyList />);

  expect(getByText('No users available... try again later.')).toBeDefined();
  expect(getByTestId('empty-icon')).toBeDefined();
});
