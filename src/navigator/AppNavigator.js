import * as React from 'react';
import {useState, useEffect} from 'react';
import {navigationRef} from './NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import HomeScreen from '../screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignupScreen from '../screens/SignupScreen';
import R from '../res/R';
import Menu from '../screens/Menu';
import SplashScreen from '../screens/SplashScreen';
import ApplicantForm from '../screens/ApplicantForm';
import CenterForm from '../screens/CenterForm';
import GroupForm from '../screens/GroupForm';
import GrtForm from '../screens/GrtForm';
import LoanProposal from '../screens/LoanProposal';
import CustomerList from '../screens/CustomerList';
import LoanApproval from '../screens/LoanApproval';
import DisbursementScreen from '../screens/DisbursementScreen';
import PaymentScreen from '../screens/PaymentScreen';
import AboutUs from '../screens/AboutUs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SplashScreen}
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RoleSelectionScreen"
          component={RoleSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeMenu"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ApplicantForm"
          component={ApplicantForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CenterForm"
          component={CenterForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GroupForm"
          component={GroupForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GrtForm"
          component={GrtForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoanProposal"
          component={LoanProposal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomerList"
          component={CustomerList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoanApproval"
          component={LoanApproval}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DisbursementScreen"
          component={DisbursementScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Home({route}) {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: R.fontSize.Size320,
        },
      }}
      drawerContent={props => <Menu {...props} />}
      initialRouteName="HomeScreen">
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
