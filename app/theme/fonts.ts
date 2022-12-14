import { textRatio } from "utils/functions/textRatio";

export const fonts = {
  poppins_black: 'Poppins-Black',
  poppins_black_italic: 'Poppins-BlackItalic',
  poppins_bold: 'Poppins-Bold',
  poppins_bold_italic: 'Poppins-BoldItalic',
  poppins_extra_bold: 'Poppins-ExtraBold',
  poppins_extra_bold_italic: 'Poppins-ExtraBoldItalic',
  poppins_extra_light: 'Poppins-ExtraLight',
  poppins_extra_light_italic: 'Poppins-ExtraLightItalic',
  poppins_italic: 'Poppins-Italic',
  poppins_light: 'Poppins-Light',
  poppins_light_italic: 'Poppins-LightItalic',
  poppins_medium: 'Poppins-Medium',
  poppins_medium_italic: 'Poppins-MediumItalic',
  poppins_regular: 'Poppins-Regular',
  poppins_semi_bold: 'Poppins-SemiBold',
  poppins_semi_bold_italic: 'Poppins-SemiBoldItalic',
  poppins_thin: 'Poppins-Thin',
  poppins_thin_italic: 'Poppins-ThinItalic',
};

export const nativeBaseFontsConfig = {
  poppins: {
    100: {
      normal: fonts.poppins_light,
      italic: fonts.poppins_light_italic,
    },
    200: {
      normal: fonts.poppins_light,
      italic: fonts.poppins_light_italic,
    },
    300: {
      normal: fonts.poppins_light,
      italic: fonts.poppins_light_italic,
    },
    400: {
      normal: fonts.poppins_regular,
      italic: fonts.poppins_italic,
    },
    500: {
      normal: fonts.poppins_medium,
    },
    600: {
      normal: fonts.poppins_medium,
      italic: fonts.poppins_medium_italic,
    },
    700: {
      normal: fonts.poppins_bold,
    },
    800: {
      normal: fonts.poppins_bold,
      italic: fonts.poppins_bold_italic,
    },
    900: {
      normal: fonts.poppins_bold,
      italic: fonts.poppins_bold_italic,
    },
  },
};


export const nativeBaseFonts = {
  fonts: {
    bold: fonts.poppins_bold,
    extrabold: fonts.poppins_extra_bold,
    regular: fonts.poppins_regular,
    medium: fonts.poppins_medium,
    light: fonts.poppins_light,
    extralight: fonts.poppins_extra_light
  },
};

export const nativeBaseFontsSizes = {
  fontSizes: {
    '1x': textRatio(16),
    '2x': textRatio(18),
    '3x': textRatio(20),
    '4x': textRatio(22),
    '5x': textRatio(24),
    '6x': textRatio(26),
    '7x': textRatio(28),
    '8x': textRatio(30),
    '9x': textRatio(32),
    '1xl': textRatio(34),
    '2xl': textRatio(36),
    '3xl': textRatio(38),
    '4xl': textRatio(40),
    '5xl': textRatio(42),
    '6xl': textRatio(44)
  },
};