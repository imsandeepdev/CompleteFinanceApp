import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import addCartRoot from '../reducer/addcart.reducer';
import {persistReducer} from 'reduxjs-toolkit-persist';
import authRoot from '../reducer/Auth.reducer';

const authPersistConfig = {
  storage: AsyncStorage,
  key: 'auth',
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authRoot),

  addCartRoot,
});
