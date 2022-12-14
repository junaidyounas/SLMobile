import {textRatio} from 'utils/functions/textRatio';
import {colors} from './colors';
import {fonts} from './fonts';

export const globalstyles = {
  btnGradient: {
    linearGradient: {
      colors: [colors.darkblue[600], colors.darkblue[400]],
      start: [0, 0],
      end: [1, 0],
    },
  },
  btnDisabledGradient: {
    linearGradient: {
      colors: [colors.gray[500], colors.gray[400]],
      start: [0, 0],
      end: [1, 0],
    },
  },
  text: {
    time: {
      fontFamily: fonts.poppins_light,
      fontSize: textRatio(11),
      color: colors.gray[500],
    },
  },
};
