import * as React from 'react';
import {useState, useEffect} from 'react';
import {navigationRef} from './NavigationService';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import HomeScreen from '../screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignupScreen from '../screens/SignupScreen';
import R from '../res/R';
import Menu from '../screens/Menu';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const AppNavigator = props => {

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={LoginScreen}
          screenOptions={{gestureEnabled: false}}>
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
        </Stack.Navigator>
      </NavigationContainer>
    );
}

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

export default AppNavigator