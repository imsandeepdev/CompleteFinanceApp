import {
  reg_grt,
  reg_grt_success,
  reg_grt_error
} from '../constants/common';

const initial_state = {
  loading: false,
  regGRTInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case reg_grt:
      return {
        ...state,
        loading: true,
      };
    case reg_grt_success:
      return {
        loading: false,
        regGRTInit: payload,
      };
    case reg_grt_error:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
