import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const widthRatio = (number: number) => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const heightRatio = (number: number) => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

export { widthRatio, heightRatio };
