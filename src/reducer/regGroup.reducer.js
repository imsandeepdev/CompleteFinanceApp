import {
  reg_group,
  reg_group_success,
  reg_group_error
} from '../constants/common';

const initial_state = {
  loading: false,
  regGroupInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case reg_group:
      return {
        ...state,
        loading: true,
      };
    case reg_group_success:
      return {
        loading: false,
        regGroupInit: payload,
      };
    case reg_group_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
