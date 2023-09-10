import {Config} from '../config';
import {
  update_Disbursement,
  update_Disbursement_success,
  update_Disbursement_error,
} from '../constants/common';
import api from '../services/api';

export const UpdateDisbursement = () => {
  return {
    type: update_Disbursement,
  };
};
export const UpdateDisbursementSuccess = payload => {
  return {
    type: update_Disbursement_success,
    payload,
  };
};
export const UpdateDisbursementError = error => {
  return {
    type: update_Disbursement_error,
    payload: error,
  };
};

export const UpdateDisbursementRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(UpdateDisbursement());
    api
      .multipostRequest({
        needAuth: false,
        data: data,
        url: `${Config.disbursementAPI}`,
      })
      .then(response => {
        dispatch(UpdateDisbursementSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(UpdateDisbursementError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
