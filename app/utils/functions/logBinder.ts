// import {getDeviceName} from 'react-native-device-info';

const logger = console.log.bind(console, '[Scrap Ready]');

export const logMe = async (comment?: any, body: any = '') =>
  logger('[Logger]', comment, body);
