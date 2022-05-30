import {textRatio} from 'utils/functions/textRatio';
import {fonts} from './fonts';

export const nativeComponentsTheme = {
  Text: {
    baseStyle: {
      fontFamily: fonts.poppins_regular,
      fontSize: textRatio(16),
    },
  },
  Input: {
    baseStyle: {
      fontSize: textRatio(25),
    },
  },
};
