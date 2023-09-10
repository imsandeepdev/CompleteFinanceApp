import {Config} from '../config';
import {add_cart, add_cart_success, add_cart_error} from '../constants/common';

export const AddCart = () => {
  return {
    type: add_cart,
  };
};
export const AddCartSuccess = payload => {
  console.log('PAYLOAD==>', payload);
  return {
    type: add_cart_success,
    payload,
  };
};
export const AddCartError = error => {
  return {
    type: add_cart_error,
    payload: error,
  };
};
