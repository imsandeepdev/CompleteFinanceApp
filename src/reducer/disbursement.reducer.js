import {
  update_Disbursement,
  update_Disbursement_success,
  update_Disbursement_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  updateDisbursementInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case update_Disbursement:
      return {
        ...state,
        loading: true,
      };
    case update_Disbursement_success:
      return {
        loading: false,
        updateDisbursementInit: payload,
      };
    case update_Disbursement_error:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
