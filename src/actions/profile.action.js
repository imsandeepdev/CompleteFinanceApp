import {Config} from '../config';
import {
  user_profile,
  user_profile_success,
  user_profile_error,
} from '../constants/common';
import api from '../services/api';

export const UserProfile = () => {
  return {
    type: user_profile,
  };
};
export const UserProfileSuccess = payload => {
  return {
    type: user_profile_success,
    payload,
  };
};
export const UserProfileError = error => {
  return {
    type: user_profile_error,
    payload: error,
  };
};

export const UserProfileRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(UserProfile());
    api
      .multiGetRequest({
        needAuth: false,
        url: `${Config.ProfileAPI}${data.userId}&RoleId=${data.roleId}`,
      })
      .then(response => {
        dispatch(UserProfileSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(UserProfileError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
