import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from 'navigations/screens.constants';
import * as React from 'react';
import EmailAskScreen from 'screens/auth/emailAsk';
import LoginScreen from 'screens/auth/login';
import RegisterScreen from 'screens/auth/register';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.LOGIN} component={LoginScreen} />
      <Stack.Screen name={screens.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={screens.EMAILASK} component={EmailAskScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
