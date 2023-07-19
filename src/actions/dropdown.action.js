import {Config} from '../config';
import {
  gender_list,
  gender_list_success,
  gender_list_error,
  get_Group_DropDown,
  get_Group_DropDown_success,
  get_Group_DropDown_error
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


export const GetGroupDropDown = () => {
  return {
    type: get_Group_DropDown,
  };
};
export const GetGroupDropDownSuccess = payload => {
  return {
    type: get_Group_DropDown_success,
    payload,
  };
};
export const GetGroupDropDownError = error => {
  return {
    type: get_Group_DropDown_error,
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


export const GetGroupDropDownRequest = (modeType, success, failed) => {
  return dispatch => {
    dispatch(GetGroupDropDown());
    api
      .multipostRequest({
        url: `${Config.getGroupDropDown}?mode=${modeType}`,
      })
      .then(response => {
        dispatch(GetGroupDropDownSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(GetGroupDropDownError(error));
        failed?.(error);
      });
  };
};



