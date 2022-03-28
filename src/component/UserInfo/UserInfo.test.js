import React from 'react';
import { render } from '@testing-library/react';

import UserInfo from '.';

import MOCK_DATA from '../../constants/testData';

it('render correct', async () => {
  const { getByText } = render(<UserInfo user={MOCK_DATA[0]} />);

  expect(getByText(MOCK_DATA[0].name)).toBeDefined();
  expect(getByText(MOCK_DATA[0].company.name)).toBeDefined();
  expect(getByText(MOCK_DATA[0].company.bs)).toBeDefined();
  expect(getByText(`"${MOCK_DATA[0].company.catchPhrase}"`)).toBeDefined();
});

it('render correct with no name', async () => {
  const { getByText } = render(<UserInfo user={MOCK_DATA[2]} />);

  expect(getByText('No name')).toBeDefined();
  expect(getByText(MOCK_DATA[2].company.name)).toBeDefined();
  expect(getByText(MOCK_DATA[2].company.bs)).toBeDefined();
  expect(getByText(`"${MOCK_DATA[2].company.catchPhrase}"`)).toBeDefined();
});
