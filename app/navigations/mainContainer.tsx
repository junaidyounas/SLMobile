import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import AuthNavigator from './navigators/authNavigator';
import { navigationRef } from './navRef';

function MainContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default MainContainer;
