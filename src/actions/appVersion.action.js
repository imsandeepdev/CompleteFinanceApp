import {Config} from '../config';
import {
  get_App_Version,
  get_App_Version_success,
  get_App_Version_error,
} from '../constants/common';
import api from '../services/api';

export const GetAppVersion = () => {
  return {
    type: get_App_Version,
  };
};
export const GetAppVersionSuccess = payload => {
  return {
    type: get_App_Version_success,
    payload,
  };
};
export const GetAppVersionError = error => {
  return {
    type: get_App_Version_error,
    payload: error,
  };
};

export const GetAppVersionRequest = (success, failed) => {
  return dispatch => {
    dispatch(GetAppVersion());
    api
      .multiGetRequest({
        needAuth: false,
        url: `${Config.getAppVersionAPI}`,
      })
      .then(response => {
        dispatch(GetAppVersionSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(GetAppVersionError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
