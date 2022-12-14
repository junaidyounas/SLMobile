import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_AUTH_TOKEN} from './constants';

export const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(ASYNC_AUTH_TOKEN, token);
  } catch (e) {
    // saving error
  }
};

export const getToken = async () => {
  const value = await AsyncStorage.getItem(ASYNC_AUTH_TOKEN);
  return value;
};
