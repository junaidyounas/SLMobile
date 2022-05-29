import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import AuthNavigator from './navigators/authNavigator';

function MainContainer() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default MainContainer;
