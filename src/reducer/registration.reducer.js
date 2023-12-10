import {
  user_registration,
  user_registration_success,
  user_registration_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  registerInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case user_registration:
      return {
        ...state,
        loading: true,
      };
    case user_registration_success:
      return {
        loading: false,
        registerInit: payload,
      };
    case user_registration_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
