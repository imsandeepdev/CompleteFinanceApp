import {Config} from '../config';
import {reg_grt, reg_grt_success, reg_grt_error} from '../constants/common';
import api from '../services/api';

export const RegGRT = () => {
  return {
    type: reg_grt,
  };
};
export const RegGRTSuccess = payload => {
  return {
    type: reg_grt_success,
    payload,
  };
};
export const RegGRTError = error => {
  return {
    type: reg_grt_error,
    payload: error,
  };
};

export const RegGRTRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(RegGRT());
    api
      .multipostRequest({
        needAuth: false,
        data: data,
        url: `${Config.updateGRTAPI}`,
      })
      .then(response => {
        dispatch(RegGRTSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(RegGRTError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
