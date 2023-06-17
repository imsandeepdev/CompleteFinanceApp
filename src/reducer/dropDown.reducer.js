import {
    gender_list,
    gender_list_success,
    gender_list_error
} from '../constants/common';

const initial_state = {
  loading: false,
  genderInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case gender_list:
      return {
        ...state,
        loading: true,
      };
    case gender_list_success:
      return {
        loading: false,
        genderInit: payload,
      };
    case gender_list_error:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
