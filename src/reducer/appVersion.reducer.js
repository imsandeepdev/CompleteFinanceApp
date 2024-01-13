import {
  get_App_Version,
  get_App_Version_success,
  get_App_Version_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  appVersionInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case get_App_Version:
      return {
        ...state,
        loading: true,
      };
    case get_App_Version_success:
      return {
        loading: false,
        appVersionInit: payload,
      };
    case get_App_Version_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
