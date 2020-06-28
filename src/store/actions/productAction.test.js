import { updateProducts, sortByPrice, getResetFilter, setActiveCategory, getFilteredPrice, getFilteredDiscount, getFilteredRating } from './productAction';

describe('actions', () => {
  describe('getProducts', () => {
    test('has the correct type', () => {
      const action = updateProducts();
      expect(action.type).toEqual('GET_PRODUCTS');
    });

    test('has the correct payload', () => {
      const action = updateProducts('new products');
      expect(action.products).toEqual('new products');
    });
  });
});

describe('actions', () => {
  describe('sortByPrice', () => {
    test('has the sorted price', () => {
      const action = sortByPrice();
      expect(action.type).toEqual('SORT_BY_PRICE');
    });
  });
});

describe('actions', () => {
  describe('reset price', () => {
    test('resets the price', () => {
      const action = getResetFilter();
      expect(action.type).toEqual('FINISH');
    });
  });
});

describe('actions', () => {
  describe('active products', () => {
    test('has active products', () => {
      const action = setActiveCategory();
      expect(action.type).toEqual('SET_ACTIVE');
    });

    test('has the correct payload', () => {
      const action = setActiveCategory('product_id');
      expect(action.id).toEqual('product_id');
    });
  });
});

describe('actions', () => {
  describe('get filtered products by range', () => {
    test('has range', () => {
      const action = getFilteredPrice();
      expect(action.type).toEqual('FILTER_PRICE');
    });

    test('has the correct payload', () => {
      const action = getFilteredPrice('range');
      expect(action.range).toEqual('range');
    });
  });
});

describe('actions', () => {
  describe('get filtered products by ratings', () => {
    test('has range', () => {
      const action = getFilteredRating();
      expect(action.type).toEqual('FILTER_RATING');
    });

    test('has the correct payload', () => {
      const action = getFilteredRating('range');
      expect(action.range).toEqual('range');
    });
  });
});

describe('actions', () => {
  describe('get filtered products by discount', () => {
    test('has range', () => {
      const action = getFilteredDiscount();
      expect(action.type).toEqual('FILTER_DISCOUNT');
    });

    test('has the correct payload', () => {
      const action = getFilteredDiscount('range');
      expect(action.range).toEqual('range');
    });
  });
});
