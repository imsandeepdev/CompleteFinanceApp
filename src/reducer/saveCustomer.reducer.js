import {
  save_customer,
  save_customer_success,
  save_customer_error
} from '../constants/common';

const initial_state = {
  loading: false,
  saveCustomerInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case save_customer:
      return {
        ...state,
        loading: true,
      };
    case save_customer_success:
      return {
        loading: false,
        saveCustomerInit: payload,
      };
    case save_customer_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
