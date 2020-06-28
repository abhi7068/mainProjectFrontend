// import { render } from '../../../utils';
import { getUserdetailisLoading, getUserisSucceded } from '../userDetailAction';
import { getUserdetails } from '../loginAction';

describe('actions', () => {
  describe('getuserdetail', () => {
    test('has the correct type', () => {
      const action = getUserdetailisLoading();
      expect(action.status).toEqual('LOADING');
    });

    test('has the correct payload', () => {
      const action = getUserisSucceded('new products');
      expect(action.status).toEqual('SUCCEEDED');
    });
  });
});

describe('actions', () => {
  describe('getuserdetail', () => {
    test('login', () => {
      const action = getUserdetails('new products');
      expect(action.status).toEqual('LOGIN_PASSED');
    });
  });
});
