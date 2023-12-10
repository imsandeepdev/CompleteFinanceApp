import {Config} from '../config';
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
import api from '../services/api';

export const LoanCollection = () => {
  return {
    type: loan_Collection_List,
  };
};
export const LoanCollectionSuccess = payload => {
  return {
    type: loan_Collection_List_success,
    payload,
  };
};
export const LoanCollectionError = error => {
  return {
    type: loan_Collection_List_error,
    payload: error,
  };
};

export const CenterCollection = () => {
  return {
    type: center_Collection_List,
  };
};
export const CenterCollectionSuccess = payload => {
  return {
    type: center_Collection_List_success,
    payload,
  };
};
export const CenterCollectionError = error => {
  return {
    type: center_Collection_List_error,
    payload: error,
  };
};

export const LoanRepaymentCollection = () => {
  return {
    type: loanRepayment_Collection,
  };
};
export const LoanRepaymentCollectionSuccess = payload => {
  return {
    type: loanRepayment_Collection_success,
    payload,
  };
};
export const LoanRepaymentCollectionError = error => {
  return {
    type: loanRepayment_Collection_error,
    payload: error,
  };
};

export const LoanCollectionRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(LoanCollection());
    api
      .multipostRequest({
        needAuth: false,
        data: data,
        url: `${Config.loanCollectionListAPI}`,
      })
      .then(response => {
        dispatch(LoanCollectionSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(LoanCollectionError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};

export const CenterCollectionRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(CenterCollection());
    api
      .multipostRequest({
        needAuth: false,
        data: data,
        url: `${Config.centerCollectionAPI}`,
      })
      .then(response => {
        dispatch(CenterCollectionSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(CenterCollectionError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};

export const LoanRepaymentCollectionRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(LoanRepaymentCollection());
    api
      .multipostRequest({
        needAuth: false,
        data: data,
        url: `${Config.loanRepaymentCollectionAPI}`,
      })
      .then(response => {
        dispatch(LoanRepaymentCollectionSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(LoanRepaymentCollectionError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
