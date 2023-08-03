import {Config} from '../config';
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
  loan_Proposal_DropDown,
  loan_Proposal_DropDown_success,
  loan_Proposal_DropDown_error,
  propose_amount,
  propose_amount_success,
  propose_amount_error,
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


export const GetGroupWiseCustomerDropDown = () => {
  return {
    type: get_Group_Wise_Customer_DropDown,
  };
};
export const GetGroupWiseCustomerDropDownSuccess = payload => {
  return {
    type: get_Group_Wise_Customer_DropDown_success,
    payload,
  };
};
export const GetGroupWiseCustomerDropDownError = error => {
  return {
    type: get_Group_Wise_Customer_DropDown_error,
    payload: error,
  };
};


export const LoanProposalDropDown = () => {
  return {
    type: loan_Proposal_DropDown,
  };
};
export const LoanProposalDropDownSuccess = payload => {
  return {
    type: loan_Proposal_DropDown_success,
    payload,
  };
};
export const LoanProposalDropDownError = error => {
  return {
    type: loan_Proposal_DropDown_error,
    payload: error,
  };
};


export const ProposeAmount = () => {
  return {
    type: propose_amount,
  };
};
export const ProposeAmountSuccess = payload => {
  return {
    type: propose_amount_success,
    payload,
  };
};
export const ProposeAmountError = error => {
  return {
    type: propose_amount_error,
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


export const GetGroupWiseCustomerDropDownRequest = (type, success, failed) => {
  return dispatch => {
    dispatch(GetGroupWiseCustomerDropDown());
    api
      .multipostRequest({
        url: `${Config.getGroupWiseCustomerAPI}?mode=${type.mode}&GroupId=${type.id}`,
      })
      .then(response => {
        dispatch(GetGroupWiseCustomerDropDownSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(GetGroupWiseCustomerDropDownError(error));
        failed?.(error);
      });
  };
};


export const LoanProposalDropdownRequest = (modeType, success, failed) => {
  return dispatch => {
    dispatch(LoanProposalDropDown());
    api
      .multipostRequest({
        url: `${Config.loanProposalDropdownAPI}${modeType}`,
      })
      .then(response => {
        dispatch(LoanProposalDropDownSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(LoanProposalDropDownError(error));
        failed?.(error);
      });
  };
};


export const ProposeAmountRequest = (data, success, failed) => {
  return dispatch => {
    dispatch(ProposeAmount());
    api
      .multipostRequest({
        needAuth: false,
        url: `${Config.proposeAmountAPI}?ProductTypeId=${data.productId}&PaymentFrequency=${data.frequencyId}`,
      })
      .then(response => {
        dispatch(ProposeAmountSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(ProposeAmountError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};



