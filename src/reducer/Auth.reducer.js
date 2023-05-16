import {
    sign_in,
    sign_in_success,
    sign_in_error
} from '../constants/common';

const initial_state = {
  loading: false,
  signInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case sign_in:
      return {
        ...state,
        loading: true,
      };
    case sign_in_success:
      return {
        loading: false,
        signInit: payload,
      };
    case sign_in_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
