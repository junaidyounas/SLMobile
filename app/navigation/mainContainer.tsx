import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from './screens.constants';
import LoginScreen from 'screens/auth/login';

const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screens.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
