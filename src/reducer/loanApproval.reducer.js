import {
  loan_proposal_detail,
  loan_proposal_detail_success,
  loan_proposal_detail_error,
  approved_Status_DropDown,
  approved_Status_DropDown_success,
  approved_Status_DropDown_error,
  update_loan_approval,
  update_loan_approval_success,
  update_loan_approval_error,
  loan_PreDisbursment_List,
  loan_PreDisbursment_List_success,
  loan_PreDisbursment_List_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  loanProposalDetailInit: {},
  approvedStatusInit: {},
  updateLoanApproveInit: {},
  LoanPreDisbursementInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case loan_proposal_detail:
      return {
        ...state,
        loading: true,
      };
    case loan_proposal_detail_success:
      return {
        loading: false,
        loanProposalDetailInit: payload,
      };
    case loan_proposal_detail_error:
      return {
        loading: false,
        error: payload,
      };
    case approved_Status_DropDown:
      return {
        ...state,
        loading: true,
      };
    case approved_Status_DropDown_success:
      return {
        loading: false,
        approvedStatusInit: payload,
      };
    case approved_Status_DropDown_error:
      return {
        loading: false,
        error: payload,
      };

    case update_loan_approval:
      return {
        ...state,
        loading: true,
      };
    case update_loan_approval_success:
      return {
        loading: false,
        updateLoanApproveInit: payload,
      };
    case update_loan_approval_error:
      return {
        loading: false,
        error: payload,
      };
    case loan_PreDisbursment_List:
      return {
        ...state,
        loading: true,
      };
    case loan_PreDisbursment_List_success:
      return {
        loading: false,
        LoanPreDisbursementInit: payload,
      };
    case loan_PreDisbursment_List_error:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
