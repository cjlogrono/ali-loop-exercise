import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';

import ContactUser from '.';
import MOCK_DATA from '../../constants/testData';

it('render correct', async () => {
  const { getByText, getByTestId } = render(
    <ContactUser user={MOCK_DATA[0]} />
  );

  expect(getByText('Contact Info')).toBeDefined();
  expect(getByTestId('username-buttonSelected')).toBeDefined();
  expect(getByTestId('email-button')).toBeDefined();
  expect(getByTestId('website-button')).toBeDefined();
  expect(getByTestId('phone-button')).toBeDefined();
  expect(getByText(MOCK_DATA[0].username)).toBeDefined();
});

it('render empty b/c no contact info', async () => {
  const { queryByText, getByTestId } = render(
    <ContactUser user={MOCK_DATA[9]} />
  );

  expect(queryByText('Contact Info')).toBeFalsy();
});

it('switch contact info', async () => {
  const { getByText, getByTestId } = render(
    <ContactUser user={MOCK_DATA[0]} />
  );

  fireEvent.click(getByTestId('email-button'));

  await waitForElement(() => getByTestId('email-buttonSelected'));
  expect(getByText(MOCK_DATA[0].email)).toBeDefined();

  fireEvent.click(getByTestId('website-button'));

  await waitForElement(() => getByTestId('website-buttonSelected'));
  expect(getByText(MOCK_DATA[0].website)).toBeDefined();

  fireEvent.click(getByTestId('phone-button'));

  await waitForElement(() => getByTestId('phone-buttonSelected'));
  expect(getByText(MOCK_DATA[0].phone)).toBeDefined();
});
