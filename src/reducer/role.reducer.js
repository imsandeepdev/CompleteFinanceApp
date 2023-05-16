import {
  get_role,
  get_role_success,
  get_role_error
} from '../constants/common';

const initial_state = {
  loading: false,
  roleInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case get_role:
      return {
        ...state,
        loading: true,
      };
    case get_role_success:
      return {
        loading: false,
        roleInit: payload,
      };
    case get_role_error:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
