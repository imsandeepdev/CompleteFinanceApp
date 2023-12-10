import {
  gender_list,
  gender_list_success,
  gender_list_error,
  get_Group_DropDown,
  get_Group_DropDown_success,
  get_Group_DropDown_error,
  get_Group_Wise_Customer_DropDown,
  get_Group_Wise_Customer_DropDown_success,
  get_Group_Wise_Customer_DropDown_error,
  loan_Proposal_DropDown,
  loan_Proposal_DropDown_success,
  loan_Proposal_DropDown_error,
  propose_amount,
  propose_amount_success,
  propose_amount_error,
  get_Bank_Name,
  get_Bank_Name_success,
  get_Bank_Name_error,
  payment_Mode_List,
  payment_Mode_List_success,
  payment_Mode_List_error,
  get_Group_Detail,
  get_Group_Detail_success,
  get_Group_Detail_error,
  get_Grt_Staff_DropDown,
  get_Grt_Staff_DropDown_success,
  get_Grt_Staff_DropDown_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  genderInit: {},
  getGroupInit: {},
  getGroupWiseCustomerInit: {},
  loanProDropDownInit: {},
  proposeAmountInit: {},
  bankNameInit: {},
  paymentModeInit: {},
  groupDetailInit: {},
  grtStaffDropDownInit: {},
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

    case get_Group_DropDown:
      return {
        ...state,
        loading: true,
      };
    case get_Group_DropDown_success:
      return {
        loading: false,
        getGroupInit: payload,
      };
    case get_Group_DropDown_error:
      return {
        loading: false,
        error: payload,
      };

    case get_Group_Wise_Customer_DropDown:
      return {
        ...state,
        loading: true,
      };
    case get_Group_Wise_Customer_DropDown_success:
      return {
        loading: false,
        getGroupWiseCustomerInit: payload,
      };
    case get_Group_Wise_Customer_DropDown_error:
      return {
        loading: false,
        error: payload,
      };
    case loan_Proposal_DropDown:
      return {
        ...state,
        loading: true,
      };
    case loan_Proposal_DropDown_success:
      return {
        loading: false,
        loanProDropDownInit: payload,
      };
    case loan_Proposal_DropDown_error:
      return {
        loading: false,
        error: payload,
      };
    case propose_amount:
      return {
        ...state,
        loading: true,
      };
    case propose_amount_success:
      return {
        loading: false,
        proposeAmountInit: payload,
      };
    case propose_amount_error:
      return {
        loading: false,
        error: payload,
      };

    case get_Bank_Name:
      return {
        ...state,
        loading: true,
      };
    case get_Bank_Name_success:
      return {
        loading: false,
        bankNameInit: payload,
      };
    case get_Bank_Name_error:
      return {
        loading: false,
        error: payload,
      };
    case payment_Mode_List:
      return {
        ...state,
        loading: true,
      };
    case payment_Mode_List_success:
      return {
        loading: false,
        paymentModeInit: payload,
      };
    case payment_Mode_List_error:
      return {
        loading: false,
        error: payload,
      };
    case get_Group_Detail:
      return {
        ...state,
        loading: true,
      };
    case get_Group_Detail_success:
      return {
        loading: false,
        groupDetailInit: payload,
      };
    case get_Group_Detail_error:
      return {
        loading: false,
        error: payload,
      };
    case get_Grt_Staff_DropDown:
      return {
        ...state,
        loading: true,
      };
    case get_Grt_Staff_DropDown_success:
      return {
        loading: false,
        grtStaffDropDownInit: payload,
      };
    case get_Grt_Staff_DropDown_error:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
