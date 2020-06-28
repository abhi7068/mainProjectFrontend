import { productDetails } from './productDetailAction'

describe('actions', () => {
  describe('show product details', () => {
    test('has range', () => {
      const action = productDetails();
      expect(action.type).toEqual('SHOW_PRODUCT');
    });

    test('has the correct payload', () => {
      const action = productDetails('product_id');
      expect(action.id).toEqual('product_id');
    });
  });
});
