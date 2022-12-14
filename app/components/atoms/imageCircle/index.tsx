import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthRatio} from 'utils/functions/pixelRatio';
import {Image} from 'native-base';
import {images} from 'assets/images';
import {colors} from 'theme/colors';

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
        borderWidth: 0.5,
        borderColor: colors.gray[400],
      }
    : {width: widthRatio(15), height: widthRatio(15)};
  return (
    <View style={[styles.container, ifSize]}>
      <Image
        style={ifSize}
        alt=" "
        source={images.dummy.avatar}
        resizeMode="cover"
      />
    </View>
  );
};

export default ImageCircle;

const styles = StyleSheet.create({
  container: {},
});
