import {
    reg_center,
    reg_center_success,
    reg_center_error
} from '../constants/common';

const initial_state = {
  loading: false,
  regCenterInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case reg_center:
      return {
        ...state,
        loading: true,
      };
    case reg_center_success:
      return {
        loading: false,
        regCenterInit: payload,
      };
    case reg_center_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
