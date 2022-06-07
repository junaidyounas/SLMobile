import {heightRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';
import {colors} from './colors';
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
      fontFamily: fonts.poppins_regular,
      backgroundColor: colors.gray[200],
      height: heightRatio(6.5),
    },
    defaultProps: {
      borderWidth: 0,
      placeholderTextColor: colors.gray[400],
    },
  },
  TextArea: {
    baseStyle: {
      fontSize: textRatio(25),
      fontFamily: fonts.poppins_regular,
      backgroundColor: colors.gray[200],
      height: heightRatio(12.5),
    },
    defaultProps: {
      borderWidth: 0,
      placeholderTextColor: colors.gray[400],
      h: heightRatio(12.5),
    },
  },
};
