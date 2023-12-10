import {Config} from '../config';
import {
  reg_center,
  reg_center_success,
  reg_center_error,
} from '../constants/common';
import api from '../services/api';

export const RegCenter = () => {
  return {
    type: reg_center,
  };
};
export const RegCenterSuccess = payload => {
  return {
    type: reg_center_success,
    payload,
  };
};
export const RegCenterError = error => {
  return {
    type: reg_center_error,
    payload: error,
  };
};

export const RegCenterRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(RegCenter());
    api
      .multipostRequest({
        needAuth: false,
        data: data,
        url: `${Config.regCenterAPI}`,
      })
      .then(response => {
        dispatch(RegCenterSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(RegCenterError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
