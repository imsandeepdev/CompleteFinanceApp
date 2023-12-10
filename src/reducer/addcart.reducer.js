import {add_cart, add_cart_success, add_cart_error} from '../constants/common';

const initial_state = {
  loading: false,
  addCartInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case add_cart:
      return {
        ...state,
        loading: true,
      };
    case add_cart_success:
      return {
        loading: false,
        addCartInit: payload,
      };
    case add_cart_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
