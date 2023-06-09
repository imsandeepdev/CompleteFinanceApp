/**
 * Sandeep Dev
 * +91-8707545794
 * Sandeepdev00@gmail.com
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import AppNavigator from './src/navigator/AppNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';

import {store, persistor} from './src/store';


const App = () => {


  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <AppNavigator />
      {/* </PersistGate> */}
    </Provider>
  );
};



export default App;
