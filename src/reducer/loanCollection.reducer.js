import {
  loan_Collection_List,
  loan_Collection_List_success,
  loan_Collection_List_error,
  center_Collection_List,
  center_Collection_List_success,
  center_Collection_List_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  loanCollectionInit: {},
  centerCollectionInit: {},
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
    default:
      return state;
  }
};

export default reducer;
