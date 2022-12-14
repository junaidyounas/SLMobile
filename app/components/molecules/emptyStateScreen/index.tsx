import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {heightRatio} from 'utils/functions/pixelRatio';
import {View} from 'native-base';
import {fonts} from 'theme/fonts';
import {colors} from 'theme/colors';
import {textRatio} from 'utils/functions/textRatio';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';

type Props = {
  text: string;
};

const EmptyStateScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.upperText}>{props.text}</Text>
      <Text
        onPress={() => {
          navigate(screens.LOGIN);
        }}
        style={styles.loginText}>
        Login now
      </Text>
    </View>
  );
};

export default EmptyStateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: heightRatio(7),
  },
  upperText: {
    fontFamily: fonts.poppins_medium,
    color: colors.black,
    fontSize: textRatio(16),
  },
  loginText: {
    fontFamily: fonts.poppins_bold,
    color: colors.darkblue[800],
    fontSize: textRatio(25),
  },
});
