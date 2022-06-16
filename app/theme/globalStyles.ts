import {colors} from './colors';

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
};
