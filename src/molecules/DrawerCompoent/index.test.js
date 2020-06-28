import React from 'react';
import { render, cleanup, fireEvent } from '../../utils';
// import { renderHook, act } from '@testing-library/react-hooks';
import DrawerCompoent from '../DrawerCompoent';

afterEach(cleanup);
it('renders', () => {
  const { asFragment } = render(<DrawerCompoent />);
  expect(asFragment(<DrawerCompoent />)).toMatchSnapshot();
});
test('should make it true', () => {
  // const { result } = renderHook(() => DrawerCompoent());
  const { getByTestId } = render(<DrawerCompoent />);
  const selectNode = getByTestId('test-input');
  expect(selectNode).not.toBeNull();
  fireEvent.click(getByTestId('ListItem'));
  // expect(result.current.outcategories).toBe(true);
});
