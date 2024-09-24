import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SplashScreen from '../screens/splashScreen';
import TutorialScreen from '../screens/tutorial';
import Login from '../screens/login';
import ForgetPswd from '../screens/forgetPswd';
import RestPswd from '../screens/ResetPassword';
import BottomNav from './bottomTab';
import FA from '../screens/2FA/FA';
import OTP from '../screens/OTP/OTP';
import { ScreenNames } from './screenName';

const Stack = createNativeStackNavigator();

export default class RootNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen options={{ headerShown: false }} name={ScreenNames.Splash} component={SplashScreen} /> 
          <Stack.Screen options={{ headerShown: false }} name={ScreenNames.Tutorial} component={TutorialScreen} />
          <Stack.Screen options={{ headerShown: false }} name={ScreenNames.Login} component={Login} />
          <Stack.Screen options={{ headerShown: false }} name={ScreenNames.Forget} component={ForgetPswd} /> 
          <Stack.Screen options={{ headerShown: false }} name={ScreenNames.Reset} component={RestPswd} />
          <Stack.Screen options={{ headerShown: false }} name={ScreenNames.FA} component={FA} />
          <Stack.Screen options={{ headerShown: false }} name={ScreenNames.OTP} component={OTP} />
          <Stack.Screen options={{ headerShown: false }} name={ScreenNames.Home} component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
