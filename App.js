/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { createSwitchNavigator } from '@react-navigation/compat';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from "./src/pages/onboarding";
import SplashScreen from "./src/pages/splashScreen";
import SignInScreen from "./src/pages/signin";
import store from './src/store';



const SwitchRouteConfig = {
  AuthLoading: SplashScreen,
  Authenticated: Onboarding,
  NotAuthenticated: SignInScreen ,
}

const SwitchConfig = {
  initialRouteName: 'AuthLoading',
}

const Navigator = createSwitchNavigator(SwitchRouteConfig, SwitchConfig);


const App: () => Node = () => {
  _storeData = async () => {
    try {
      await AsyncStorage.setItem(
        'userToken',
        'true'
      );
    } catch (error) {
      // Error saving data
    }
  };
  _storeData()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: cfasset.primaryColor,
//     position: 'absolute', 
//     top: 0, left: 0, 
//     right: 0, bottom: 0, 
//     justifyContent: 'center', 
//     alignItems: 'center'
//   }
// });

export default App;
