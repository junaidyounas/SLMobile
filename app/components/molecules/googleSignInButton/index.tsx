import {StyleSheet} from 'react-native';
import React from 'react';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {fonts} from 'theme/fonts';
import {textRatio} from 'utils/functions/textRatio';
import {Image, Pressable, Text} from 'native-base';
import {GoogleAuthClass} from 'utils/helpers/googleSignin';
import {images} from 'assets/images';

type Props = {};

const GoogleSignInButton = (props: Props) => {
  const googleS = new GoogleAuthClass();
  return (
    <Pressable
      onPress={() => {
        googleS.signIn();
      }}
      style={styles.container}>
      <Image alt=" " source={images.icons.google} style={styles.icon} />
      <Text style={styles.text}>Sign in with Google</Text>
    </Pressable>
  );
};

export default GoogleSignInButton;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(50),
    height: heightRatio(5.5),
    borderRadius: widthRatio(6),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: fonts.poppins_regular,
    fontSize: textRatio(12),
  },
  icon: {
    width: widthRatio(7),
    height: widthRatio(7),
  },
});
