import {
  gender_list,
  gender_list_success,
  gender_list_error,
  get_Group_DropDown,
  get_Group_DropDown_success,
  get_Group_DropDown_error,
  get_Group_Wise_Customer_DropDown,
  get_Group_Wise_Customer_DropDown_success,
  get_Group_Wise_Customer_DropDown_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  genderInit: {},
  getGroupInit: {},
  getGroupWiseCustomerInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case gender_list:
      return {
        ...state,
        loading: true,
      };
    case gender_list_success:
      return {
        loading: false,
        genderInit: payload,
      };
    case gender_list_error:
      return {
        loading: false,
        error: payload,
      };

    case get_Group_DropDown:
      return {
        ...state,
        loading: true,
      };
    case get_Group_DropDown_success:
      return {
        loading: false,
        getGroupInit: payload,
      };
    case get_Group_DropDown_error:
      return {
        loading: false,
        error: payload,
      };

    case get_Group_Wise_Customer_DropDown:
      return {
        ...state,
        loading: true,
      };
    case get_Group_Wise_Customer_DropDown_success:
      return {
        loading: false,
        getGroupWiseCustomerInit: payload,
      };
    case get_Group_Wise_Customer_DropDown_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
