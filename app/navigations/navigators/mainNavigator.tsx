import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from 'navigations/screens.constants';
import * as React from 'react';
import EmailAskScreen from 'screens/auth/emailAsk';
import LoginScreen from 'screens/auth/login';
import RegisterScreen from 'screens/auth/register';
import ChatSessions from 'screens/chat/sessions';
import SingleChatScreen from 'screens/chat/singleChat';
import EditPostScreen from 'screens/editPost';
import LocationChooser from 'screens/locationChooser';
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
        <Stack.Screen name={screens.SINGLEPOST} component={SinglePostScreen} />
        <Stack.Screen name={screens.EDITPOST} component={EditPostScreen} />
      </Stack.Group>
      {/* chat */}
      <Stack.Group>
        <Stack.Screen name={screens.CHATSESSIONS} component={ChatSessions} />
        <Stack.Screen name={screens.SINGLECHAT} component={SingleChatScreen} />
      </Stack.Group>

      <Stack.Screen
        name={screens.LOCATION_CHOOSER}
        component={LocationChooser}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
