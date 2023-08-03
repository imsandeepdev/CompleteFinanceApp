import {
  save_loan_proposal,
  save_loan_proposal_success,
  save_loan_proposal_error,
} from '../constants/common';

const initial_state = {
  loading: false,
  saveLoanProposalInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case save_loan_proposal:
      return {
        ...state,
        loading: true,
      };
    case save_loan_proposal_success:
      return {
        loading: false,
        saveLoanProposalInit: payload,
      };
    case save_loan_proposal_error:
      return {
        loading: false,
        error: payload,
      };

   

    default:
      return state;
  }
};

export default reducer;
