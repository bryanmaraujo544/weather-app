/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import { Search } from './index';

it('searchRenderCheck', () => {
  const { queryByTitle } = render(<Search />);
  const input = queryByTitle('search');
  expect(input).toBeTruthy();
});

describe('changeInInput', () => {
  it('onChange', () => {
    const { queryByTitle } = render(<Search />);
    const input = queryByTitle('search');
    fireEvent.change(input, { target: { value: 'testValue' } });
    expect(input.value).toBe('testValue');
  })
})