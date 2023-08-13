import {Config} from '../config';
import {
    loan_proposal_detail,
    loan_proposal_detail_success,
    loan_proposal_detail_error,
    approved_Status_DropDown,
    approved_Status_DropDown_success,
    approved_Status_DropDown_error,
    update_loan_approval,
    update_loan_approval_success,
    update_loan_approval_error
} from '../constants/common';
import api from '../services/api';

export const LoanProposalDetail = () => {
  return {
    type: loan_proposal_detail,
  };
};
export const LoanProposalDetailSuccess = payload => {
  return {
    type: loan_proposal_detail_success,
    payload,
  };
};
export const LoanProposalDetailError = error => {
  return {
    type: loan_proposal_detail_error,
    payload: error,
  };
};

export const ApprovedStatusDropDown = () => {
  return {
    type: approved_Status_DropDown,
  };
};
export const ApprovedStatusDropDownSuccess = payload => {
  return {
    type: approved_Status_DropDown_success,
    payload,
  };
};
export const ApprovedStatusDropDownError = error => {
  return {
    type: approved_Status_DropDown_error,
    payload: error,
  };
};

export const UpdateLoanApproval = () => {
  return {
    type: update_loan_approval,
  };
};
export const UpdateLoanApprovalSuccess = payload => {
  return {
    type: update_loan_approval_success,
    payload,
  };
};
export const UpdateLoanApprovalError = error => {
  return {
    type: update_loan_approval_error,
    payload: error,
  };
};

export const LoanProposalDetailRequest = (pid, success, failed) => {
  return dispatch => {
    dispatch(LoanProposalDetail());
    api
      .multipostRequest({
        needAuth: false,
        url: `${Config.loanProposalDetailAPI}?ProposalId=${pid}`,
      })
      .then(response => {
        dispatch(LoanProposalDetailSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(LoanProposalDetailError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};



export const ApprovedStatusDropDownRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(ApprovedStatusDropDown());
    api
      .multipostRequest({
        needAuth:false,
        url: `${Config.loanProposalDropdownAPI}${data.mode}&filterId=${data.filterId}`,
      })
      .then(response => {
        dispatch(ApprovedStatusDropDownSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(ApprovedStatusDropDownError(error));
        failed?.(error);
      });
  };
};


export const UpdateLoanApprovalRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(UpdateLoanApproval());
    api
      .multipostRequest({
        needAuth: false,
        data:data,
        url: `${Config.updateLoanApprovalAPI}`,
      })
      .then(response => {
        dispatch(UpdateLoanApprovalSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(UpdateLoanApprovalError(error));
        failed?.(error);
      });
  };
};
