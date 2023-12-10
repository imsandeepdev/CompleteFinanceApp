import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'reduxjs-toolkit-persist';
import authRoot from '../reducer/Auth.reducer';
import registerRoot from '../reducer/registration.reducer';
import profileRoot from '../reducer/profile.reducer';
import roleRoot from '../reducer/role.reducer';
import dropDownRoot from '../reducer/dropDown.reducer';
import regGroupRoot from '../reducer/regGroup.reducer';
import saveCustomerRoot from '../reducer/saveCustomer.reducer';
import loanProposalRoot from '../reducer/loanProposal.reducer';
import loanProposalDetailRoot from '../reducer/loanApproval.reducer';
import loanCollectionRoot from '../reducer/loanCollection.reducer';

const authPersistConfig = {
  storage: AsyncStorage,
  key: 'auth',
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authRoot),
  registerRoot,
  profileRoot,
  roleRoot,
  dropDownRoot,
  regGroupRoot,
  saveCustomerRoot,
  loanProposalRoot,
  loanProposalDetailRoot,
  loanCollectionRoot,
});
