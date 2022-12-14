import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fonts} from 'theme/fonts';
import {widthRatio} from 'utils/functions/pixelRatio';

type Props = {
  label: string;
  marginLeft?: number;
};

const LabelText = (props: Props) => {
  const {label, marginLeft} = props;

  const mLeft = marginLeft ? {marginLeft: widthRatio(marginLeft)} : {};

  return <Text style={[styles.header, mLeft]}>{label}</Text>;
};

export default LabelText;

const styles = StyleSheet.create({
  header: {
    fontFamily: fonts.poppins_semi_bold,
  },
});
