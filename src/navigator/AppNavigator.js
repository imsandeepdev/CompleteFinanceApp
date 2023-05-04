import * as React from 'react';
import {useState, useEffect} from 'react';
import {navigationRef} from './NavigationService';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';


const Stack = createStackNavigator();

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
            name="RoleSelectionScreen"
            component={RoleSelectionScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator