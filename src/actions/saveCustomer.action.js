import {Config} from '../config';
import {
 save_customer,
 save_customer_success,
 save_customer_error,
 save_customer_document,
 save_customer_document_success,
 save_customer_document_error
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


export const SaveCustomerDocument = () => {
  return {
    type: save_customer_document,
  };
};
export const SaveCustomerDocumentSuccess = payload => {
  return {
    type: save_customer_document_success,
    payload,
  };
};
export const SaveCustomerDocumentError = error => {
  return {
    type: save_customer_document_error,
    payload: error,
  };
};

export const SaveCustomerRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(SaveCustomer());
    api
      .multipostRequest({
        needAuth: false,
        data:data,
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


export const SaveCustomerDocumentRequest = (formdata, success, failed) => {
  return dispatch => {
    dispatch(SaveCustomerDocument());
    api
      .multipartRequest({
        needAuth: false,
        formData:formdata,
        url: `${Config.saveCustomerDocAPI}`,
      })
      .then(response => {
        dispatch(SaveCustomerDocumentSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(SaveCustomerDocumentError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
