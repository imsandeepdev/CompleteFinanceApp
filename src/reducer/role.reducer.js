import {
  get_role,
  get_role_success,
  get_role_error,
  get_menu_list,
  get_menu_list_success,
  get_menu_list_error,
  get_allCustomer,
  get_allCustomer_success,
  get_allCustomer_error,
  get_LoanProposal_CustomerList,
  get_LoanProposal_CustomerList_success,
  get_LoanProposal_CustomerList_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  roleInit: {},
  getMenuInit: {},
  getAllCustomerInit: {},
  getLoanProposalCustomerInit: {},
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
    case get_menu_list:
      return {
        ...state,
        loading: true,
      };
    case get_menu_list_success:
      return {
        loading: false,
        getMenuInit: payload,
      };
    case get_menu_list_error:
      return {
        loading: false,
        error: payload,
      };
    case get_allCustomer:
      return {
        ...state,
        loading: true,
      };
    case get_allCustomer_success:
      return {
        loading: false,
        getAllCustomerInit: payload,
      };
    case get_allCustomer_error:
      return {
        loading: false,
        error: payload,
      };
    case get_LoanProposal_CustomerList:
      return {
        ...state,
        loading: true,
      };
    case get_LoanProposal_CustomerList_success:
      return {
        loading: false,
        getLoanProposalCustomerInit: payload,
      };
    case get_LoanProposal_CustomerList_error:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
