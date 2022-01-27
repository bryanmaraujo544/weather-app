/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import { Search } from './index';

it('searchRenderCheck', () => {
  const { getByTestId } = render(<Search />);
  const input = getByTestId('input');
  expect(input).toBeTruthy();
});

it('check if the input was cleaned after form submition', async () => {
  const { getByTestId } = render(<Search />);
  const form = getByTestId('form');
  const input = getByTestId('input');
  
  fireEvent.submit(form);

  expect(input.value).toBe('');
});

// describe('changeInInput', () => {
//   it('onChange', () => {
//     const { queryByTitle } = render(<Search />);
//     const input = queryByTitle('search');
//     fireEvent.change(input, { target: { value: 'testValue' } });
//     expect(input.value).toBe('testValue');
//   })
// });