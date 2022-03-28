import React from 'react';
import { render } from '@testing-library/react';

import UserLocation from '.';

import MOCK_DATA from '../../constants/testData';

it('render correct', async () => {
  const { getByText } = render(<UserLocation user={MOCK_DATA[0]} />);

  expect(getByText('Location')).toBeDefined();
  expect(
    getByText(`${MOCK_DATA[0].address.street} ${MOCK_DATA[0].address.suite}`)
  ).toBeDefined();
  expect(
    getByText(`${MOCK_DATA[0].address.city}, ${MOCK_DATA[0].address.zipcode}`)
  ).toBeDefined();
  expect(getByText('see in google maps')).toBeDefined();
  expect(getByText('see in google maps').href.split('q=')[1]).toBe(
    `${MOCK_DATA[0].address.geo.lat}.${MOCK_DATA[0].address.geo.lng}`
  );
});

it('render w/out google maps button', async () => {
  const { getByText, queryByText } = render(
    <UserLocation user={MOCK_DATA[1]} />
  );

  expect(getByText('Location')).toBeDefined();
  expect(
    getByText(`${MOCK_DATA[1].address.street} ${MOCK_DATA[1].address.suite}`)
  ).toBeDefined();
  expect(
    getByText(`${MOCK_DATA[1].address.city}, ${MOCK_DATA[1].address.zipcode}`)
  ).toBeDefined();
  expect(queryByText('see in google maps')).toBeFalsy();
});

it('render empty b/c missing street info', async () => {
  const { queryByText } = render(<UserLocation user={MOCK_DATA[7]} />);

  expect(queryByText('Location')).toBeFalsy();
  expect(
    queryByText(`${MOCK_DATA[7].address.street} ${MOCK_DATA[7].address.suite}`)
  ).toBeFalsy();
  expect(
    queryByText(`${MOCK_DATA[7].address.city}, ${MOCK_DATA[7].address.zipcode}`)
  ).toBeFalsy();
  expect(queryByText('see in google maps')).toBeFalsy();
});

it('render empty b/c no address boject', async () => {
  const { queryByText } = render(<UserLocation user={MOCK_DATA[8]} />);

  expect(queryByText('Location')).toBeFalsy();
});
