import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import MainNavigator from './navigators/mainNavigator';
import { navigationRef } from './navRef';

function MainContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default MainContainer;
