import {Config} from '../config';
import {
  get_role,
  get_role_success,
  get_role_error
} from '../constants/common';
import api from '../services/api';

export const GetRole = () => {
  return {
    type: get_role,
  };
};
export const GetRoleSuccess = payload => {
  return {
    type: get_role_success,
    payload,
  };
};
export const GetRoleError = error => {
  return {
    type: get_role_error,
    payload: error,
  };
};

export const GetRoleRequest = (user_id, success, failed) => {
  return dispatch => {
    dispatch(GetRole());
    api
      .multiGetRequest({
        url: `${Config.roleAPI}${user_id}`,
      })
      .then(response => {
        dispatch(GetRoleSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(GetRoleError(error));
        failed?.(error);
      });
  };
};
