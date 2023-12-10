import {
  loan_Collection_List,
  loan_Collection_List_success,
  loan_Collection_List_error,
  center_Collection_List,
  center_Collection_List_success,
  center_Collection_List_error,
  loanRepayment_Collection,
  loanRepayment_Collection_success,
  loanRepayment_Collection_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  loanCollectionInit: {},
  centerCollectionInit: {},
  loanRepaymentInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case loan_Collection_List:
      return {
        ...state,
        loading: true,
      };
    case loan_Collection_List_success:
      return {
        loading: false,
        loanCollectionInit: payload,
      };
    case loan_Collection_List_error:
      return {
        loading: false,
        error: payload,
      };
    case center_Collection_List:
      return {
        ...state,
        loading: true,
      };
    case center_Collection_List_success:
      return {
        loading: false,
        centerCollectionInit: payload,
      };
    case center_Collection_List_error:
      return {
        loading: false,
        error: payload,
      };
    case loanRepayment_Collection:
      return {
        ...state,
        loading: true,
      };
    case loanRepayment_Collection_success:
      return {
        loading: false,
        loanRepaymentInit: payload,
      };
    case loanRepayment_Collection_error:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
