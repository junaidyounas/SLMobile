import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthRatio} from 'utils/functions/pixelRatio';
import {Image} from 'native-base';
import {images} from 'assets/images';

type Props = {
  size?: number;
};

const ImageCircle = (props: Props) => {
  const {size} = props;

  const ifSize = size
    ? {
        width: widthRatio(size),
        height: widthRatio(size),
        borderRadius: widthRatio(size),
      }
    : {width: widthRatio(15), height: widthRatio(15)};
  return (
    <View style={[styles.container, ifSize]}>
      <Image
        style={ifSize}
        alt=" "
        source={images.dummy.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default ImageCircle;

const styles = StyleSheet.create({
  container: {},
});
