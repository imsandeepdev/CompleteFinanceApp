import {
  user_profile,
  user_profile_success,
  user_profile_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  userInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case user_profile:
      return {
        ...state,
        loading: true,
      };
    case user_profile_success:
      return {
        loading: false,
        userInit: payload,
      };
    case user_profile_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
