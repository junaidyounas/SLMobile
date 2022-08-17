import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import {heightRatio} from 'utils/functions/pixelRatio';

type Props = {
  marginTop?: number;
  marginBottom?: number;
  isBorder?: boolean;
};

const Saperator = (props: Props) => {
  const {marginTop, marginBottom, isBorder} = props;
  let otherStyles = [];
  if (marginTop) {
    otherStyles.push({marginTop: heightRatio(marginTop)});
  }
  if (marginBottom) {
    otherStyles.push({marginBottom: heightRatio(marginBottom)});
  }
  if (isBorder) {
    otherStyles.push({borderWidth: 0.6});
  }

  return <View style={[styles.saperator, otherStyles]} />;
};

export default Saperator;

const styles = StyleSheet.create({
  saperator: {
    width: '100%',
    borderColor: colors.gray[400],
  },
});
