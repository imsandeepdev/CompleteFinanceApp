import {Config} from '../config';
import {
    sign_in,
    sign_in_success,
    sign_in_error,
} from '../constants/common';
import api from '../services/api';

export const SignIn = () => {
  return {
    type: sign_in,
  };
};
export const SignInSuccess = payload => {
  console.log('PAYLOAD==>', payload);
  return {
    type: sign_in_success,
    payload,
  };
};
export const SignInError = error => {
  return {
    type: sign_in_error,
    payload: error,
  };
};

export const SignInRequest = (data,success, failed) => {
  return dispatch => {
    dispatch(SignIn());
    api
      .multipostRequest({
        needAuth: false,
        data:data,
        url: `${Config.LoginAPI}`,
      })
      .then(response => {
        dispatch(SignInSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(SignInError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};

