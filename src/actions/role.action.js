import {Config} from '../config';
import {
  get_role,
  get_role_success,
  get_role_error,
  get_menu_list,
  get_menu_list_success,
  get_menu_list_error
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

export const GetMenuList = () => {
  return {
    type: get_menu_list,
  };
};
export const GetMenuListSuccess = payload => {
  return {
    type: get_menu_list_success,
    payload,
  };
};
export const GetMenuListError = error => {
  return {
    type: get_menu_list_error,
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


export const GetMenuListRequest = (success, failed) => {
  return dispatch => {
    dispatch(GetMenuList());
    api
      .multiGetRequest({
        url: `${Config.GetMenuListAPI}`,
      })
      .then(response => {
        dispatch(GetMenuListSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(GetMenuListError(error));
        failed?.(error);
      });
  };
};
