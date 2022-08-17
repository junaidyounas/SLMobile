import {StyleSheet} from 'react-native';
import React from 'react';
import {Pressable, Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {fonts} from 'theme/fonts';
import {textRatio} from 'utils/functions/textRatio';

type Props = {
  onPress: any;
  title: string;
  Icon?: any;
};

const AccountOption = (props: Props) => {
  const {onPress, title, Icon} = props;
  return (
    <Pressable onPress={onPress} style={styles.optionContainer}>
      <Text style={styles.optionText}>{title}</Text>
      {Icon ? <Icon /> : null}
    </Pressable>
  );
};

export default AccountOption;

const styles = StyleSheet.create({
  optionContainer: {
    paddingVertical: widthRatio(3),
    paddingHorizontal: widthRatio(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionText: {
    fontFamily: fonts.poppins_regular,
    fontSize: textRatio(20),
  },
});
