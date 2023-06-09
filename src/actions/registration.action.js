import {Config} from '../config';
import {
    user_registration,
    user_registration_success,
    user_registration_error
} from '../constants/common';
import api from '../services/api';

export const UserRegistration = () => {
  return {
    type: user_registration,
  };
};
export const UserRegistrationSuccess = payload => {
  console.log('PAYLOAD==>', payload);
  return {
    type: user_registration_success,
    payload,
  };
};
export const UserRegistrationError = error => {
  return {
    type: user_registration_error,
    payload: error,
  };
};


export const UserRegistrationRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(UserRegistration());
    api
      .multipostRequest({
        needAuth: false,
       data:data,
        url:`${Config.RegisterAPI}`
        // url: `${Config.RegisterAPI}?mode=${data.mode}&empId=${data.empId}&logincode=${data.logincode}&password=${data.password}&deviceNo=${data.deviceNo}&mobileNo=${data.mobileNo}&approvalLogin=${data.approvalLogin}&is_Active=${data.is_Active}&createdby=${data.createdby}&createdDate=${data.createdDate}&approvedBy=${data.approvedBy}&approveddate=${data.approveddate}`,
      })
      .then(response => {
        dispatch(UserRegistrationSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(UserRegistrationError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
