import InputWithRightIcon from 'components/base/inputWithRightIcon'
import AuthLayout from 'components/layouts/Auth'
import { Pressable, Text, View } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { colors } from 'theme/colors'
import { fonts } from 'theme/fonts'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import { textRatio } from 'utils/functions/textRatio'
import Ionicons from 'react-native-vector-icons/Ionicons'
type Props = {}

const LoginScreen = (props: Props) => {

  const [isEyeOff, setIsEyeOff] = useState(false);

  return (
    <AuthLayout>
      <View style={styles.container}>
        <Text style={styles.line1}>Please sign in to proceed</Text>
        <InputWithRightIcon placeholder="Enter your email address" label="Email" marginTop={6} rightIcon={<Ionicons color={colors.darkblue[300]} name="mail" size={textRatio(26)} />} />
        <InputWithRightIcon placeholder="Enter your password" label="Password" marginTop={2} rightIcon={<Pressable onPress={() => setIsEyeOff(!isEyeOff)}><Ionicons color={colors.darkblue[300]} name={isEyeOff ? 'eye-off' : 'eye'} size={textRatio(26)} /></Pressable>} />
      </View>
    </AuthLayout>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthRatio(6),
    alignItems: 'flex-start'
  },
  childContainer: {

  },
  line1: {
    color: colors.gray[400],
    fontSize: textRatio(18),
    fontFamily: fonts.poppins_medium,
    marginTop: heightRatio(1)
  }
});