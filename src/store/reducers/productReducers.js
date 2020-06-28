const initialState = {
  products: [],
  filteredLatest: [],
  isLoading: true,
  activeCategoryId: '',
  range: {
    FILTER_PRICE: [0, 15000],
    FILTER_DISCOUNT: [0, 80],
    FILTER_RATING: [0, 5],
  },
  updateRating: false,
  sort: false,
};
const sortProducts = (toSort, sortBy) => {
  const sortTo = [...toSort];
  sortTo.sort(function (a, b) {
    const nameA = a[sortBy];
    const nameB = b[sortBy];
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  //
  return sortTo;
};
const filterByRating = (filteredLatest, range, isFilter) => {
  if (!isFilter) return filteredLatest;
  return filteredLatest.filter((product) => {
    if (!product.reviews.length && range[0] === 0) return true;
    return (
      product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        product.reviews.reduce(
          (total, review) => (review.rating ? total + 1 : total),
          0
        ) >=
        range[0] &&
      product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        product.reviews.reduce(
          (total, review) => (review.rating ? total + 1 : total),
          0
        ) <=
        range[1]
    );
  });
};

const filterByAnyThing = (products, range, byRating) => {
  return filterByRating(
    products
      .filter(
        (product) =>
          product.price >= range.FILTER_PRICE[0] &&
          product.price <= range.FILTER_PRICE[1]
      )
      .filter(
        (product) =>
          product.discount >= range.FILTER_DISCOUNT[0] &&
          product.discount <= range.FILTER_DISCOUNT[1]
      ),
    range.FILTER_RATING,
    byRating
  );
};

const productReducer = (state = initialState, action) => {
  const { products, id } = action;
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products,
        filteredLatest: products,
        isLoading: false,
        isSorting: false,
      };
    case 'ACTIVE_CATEGORY':
      return { ...state, activeCategoryId: action.id };

    case 'SHOW_PRODUCT':
      return {
        ...state,
        filteredData: state.products.filter((product) => product._id === id),
      };
    case 'SORT_BY_PRICE': {
      return {
        ...state,
        filteredLatest: [
          ...sortProducts(state.filteredLatest || state.products, 'price'),
        ],
        sort: true,
      };
    }
    case 'FILTER_PRICE': {
      return {
        ...state,
        range: { ...state.range, [action.type]: action.range },
        priceRangeForSlider: action.range,
        filteredLatest: [
          ...filterByAnyThing(
            state.sort ? sortProducts(state.products, 'price') : state.products,
            {
              ...state.range,
              [action.type]: action.range,
            },
            state.updateRating
          ),
        ],
      };
    }
    case 'FINISH': {
      return {
        ...state,
        filteredLatest: state.products,
        updateRating: false,
        sort: false,
      };
    }
    case 'FILTER_DISCOUNT': {
      return {
        ...state,
        range: { ...state.range, [action.type]: action.range },
        discountRangeForSlider: action.range,
        filteredLatest: [
          ...filterByAnyThing(
            state.sort ? sortProducts(state.products, 'price') : state.products,
            {
              ...state.range,
              [action.type]: action.range,
            },
            state.updateRating
          ),
        ],
      };
    }
    case 'FILTER_RATING': {
      return {
        ...state,
        updateRating: true,
        range: { ...state.range, [action.type]: action.range },
        ratingRangeForSlider: action.range,
        filteredLatest: [
          ...filterByAnyThing(
            state.sort ? sortProducts(state.products, 'price') : state.products,
            {
              ...state.range,
              [action.type]: action.range,
            },
            true
          ),
        ],
      };
    }
    case 'RESET_PRODUCT': {
      return { ...initialState };
    }
    default:
      return state;
  }
};
export default productReducer;
