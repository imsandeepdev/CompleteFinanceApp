import {Config} from '../config';
import {
 reg_group,
 reg_group_success,
 reg_group_error
} from '../constants/common';
import api from '../services/api';

export const RegGroup = () => {
  return {
    type: reg_group,
  };
};
export const RegGroupSuccess = payload => {
  return {
    type: reg_group_success,
    payload,
  };
};
export const RegGroupError = error => {
  return {
    type: reg_group_error,
    payload: error,
  };
};

export const RegGroupRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(RegGroup());
    api
      .multipostRequest({
        needAuth: false,
        data: data,
        url: `${Config.regGroupAPI}`,
      })
      .then(response => {
        dispatch(RegGroupSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(RegGroupError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
