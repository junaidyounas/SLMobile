import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from 'navigations/screens.constants';
import * as React from 'react';
import EmailAskScreen from 'screens/auth/emailAsk';
import LoginScreen from 'screens/auth/login';
import RegisterScreen from 'screens/auth/register';
import SinglePostScreen from 'screens/singlePost';
import BottomNavigator from './bottomNavigator';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={screens.BOTTOMNAVIGATOR}
      screenOptions={{
        headerShown: false,
      }}>
      {/* Auth */}
      <Stack.Group>
        <Stack.Screen name={screens.LOGIN} component={LoginScreen} />
        <Stack.Screen name={screens.REGISTER} component={RegisterScreen} />
        <Stack.Screen name={screens.EMAILASK} component={EmailAskScreen} />
      </Stack.Group>
      {/* Bottom */}
      <Stack.Group>
        <Stack.Screen
          name={screens.BOTTOMNAVIGATOR}
          component={BottomNavigator}
        />
        <Stack.Screen
          name={screens.SinglePostScreen}
          component={SinglePostScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default MainNavigator;
