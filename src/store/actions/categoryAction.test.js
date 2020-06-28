import { LOADING, SUCCEEDED } from '../store-action';
import { getCategoreisLoading, getCategoreisSucceded } from './categoryAction';

describe('actions', () => {
  describe('getProducts', () => {
    test('has the correct type', () => {
      const action = getCategoreisLoading();
      expect(action.type).toEqual('GET_CATEGORIES');
    });

    test('has the correct payload', () => {
      const action = getCategoreisLoading('new category');
      expect(action.status).toEqual(LOADING);
    });
  });
});

describe('actions', () => {
  describe('product load successful', () => {
    test('has the correct type', () => {
      const action = getCategoreisSucceded();
      expect(action.type).toEqual('GET_CATEGORIES');
    });

    test('status loading', () => {
      const action = getCategoreisSucceded();
      expect(action.status).toEqual(SUCCEEDED);
    });
    test('data displayed', () => {
      const action = getCategoreisSucceded('data');
      expect(action.data).toEqual('data');
    });
  });
});
