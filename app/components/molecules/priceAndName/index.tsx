import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from 'theme/fonts';
import {colors} from 'theme/colors';
import {textRatio} from 'utils/functions/textRatio';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';

type Props = {
  name?: string;
  price?: number;
};

const PriceAndName = (props: Props) => {
  const {name, price} = props;
  return (
    <View style={styles.priceNameContainer}>
      <Text style={styles.priceText}>Rs {price}</Text>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
};

export default PriceAndName;

const styles = StyleSheet.create({
  priceNameContainer: {
    paddingHorizontal: widthRatio(3),
    paddingVertical: heightRatio(1),
  },
  nameText: {
    fontFamily: fonts.poppins_semi_bold,
    color: colors.gray[100],
    fontSize: textRatio(14),
  },
  priceText: {
    fontFamily: fonts.poppins_medium,
    color: colors.gray[100],
    fontSize: textRatio(20),
    alignItems: 'center',
  },
});
