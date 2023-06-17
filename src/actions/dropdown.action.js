import {Config} from '../config';
import {
  gender_list,
  gender_list_success,
  gender_list_error
} from '../constants/common';
import api from '../services/api';

export const GenderList = () => {
  return {
    type: gender_list,
  };
};
export const GenderListSuccess = payload => {
  return {
    type: gender_list_success,
    payload,
  };
};
export const GenderListError = error => {
  return {
    type: gender_list_error,
    payload: error,
  };
};



export const GenderListRequest = (modeType, success, failed) => {
  return dispatch => {
    dispatch(GenderList());
    api
      .multiGetRequest({
        url: `${Config.dropDownAPI}${modeType}`,
      })
      .then(response => {
        dispatch(GenderListSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(GenderListError(error));
        failed?.(error);
      });
  };
};


