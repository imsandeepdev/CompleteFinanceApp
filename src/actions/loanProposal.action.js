import {Config} from '../config';
import {
  save_loan_proposal,
  save_loan_proposal_success,
  save_loan_proposal_error,
} from '../constants/common';
import api from '../services/api';

export const SaveLoanProposal = () => {
  return {
    type: save_loan_proposal,
  };
};
export const SaveLoanProposalSuccess = payload => {
  return {
    type: save_loan_proposal_success,
    payload,
  };
};
export const SaveLoanProposalError = error => {
  return {
    type: save_loan_proposal_error,
    payload: error,
  };
};

export const SaveLoanProposalRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(SaveLoanProposal());
    api
      .multipostRequest({
        needAuth: false,
        data: data,
        url: `${Config.saveLoanProposalAPI}`,
      })
      .then(response => {
        dispatch(SaveLoanProposalSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(SaveLoanProposalError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
