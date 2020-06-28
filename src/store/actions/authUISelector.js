import { createSelector } from 'reselect';

const selectAuthUI = (state) => state.authUI;

export const selectAuthUIItem = createSelector(
  [selectAuthUI],
  (authUI) => authUI.isAuthUIOpened
);
