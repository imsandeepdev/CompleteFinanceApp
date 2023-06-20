import {Config} from '../config';
import {
 save_customer,
 save_customer_success,
 save_customer_error
} from '../constants/common';
import api from '../services/api';

export const SaveCustomer = () => {
  return {
    type: save_customer,
  };
};
export const SaveCustomerSuccess = payload => {
  return {
    type: save_customer_success,
    payload,
  };
};
export const SaveCustomerError = error => {
  return {
    type: save_customer_error,
    payload: error,
  };
};

export const SaveCustomerRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(SaveCustomer());
    api
      .multipartRequest({
        needAuth: false,
        formData:data,
        url: `${Config.saveCustomerAPI}`,
      })
      .then(response => {
        dispatch(SaveCustomerSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(SaveCustomerError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
