import InputWithRightIcon from 'components/base/inputWithRightIcon'
import AuthLayout from 'components/layouts/Auth'
import { Center, Pressable, Text, View } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import { colors } from 'theme/colors'
import { fonts } from 'theme/fonts'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import { textRatio } from 'utils/functions/textRatio'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TextWithBothSideLines from 'components/atoms/textWithBothSideLines'
import { navigate } from 'navigations/navRef'
import { screens } from 'navigations/screens.constants'
type Props = {}

const RegisterScreen = (props: Props) => {

  const [isEyeOff, setIsEyeOff] = useState(false);

  return (
    <AuthLayout header={`Don't havean account?\nSign up here`}>
      <View style={styles.container}>
        <Text style={styles.line1}>Please sign in to proceed</Text>
        <InputWithRightIcon placeholder="Enter your full name" label="Name" marginTop={6} rightIcon={<Ionicons color={colors.darkblue[300]} name="person" size={textRatio(26)} />} />
        <InputWithRightIcon placeholder="Enter your email address" label="Email" marginTop={2} rightIcon={<Ionicons color={colors.darkblue[300]} name="mail" size={textRatio(26)} />} />
        <InputWithRightIcon placeholder="Enter your phone number" label="Phone Number" marginTop={2} rightIcon={<Ionicons color={colors.darkblue[300]} name="phone-portrait" size={textRatio(26)} />} />
        <InputWithRightIcon placeholder="Enter your password" label="Password" marginTop={2} rightIcon={<Pressable onPress={() => setIsEyeOff(!isEyeOff)}><Ionicons color={colors.darkblue[300]} name={isEyeOff ? 'eye-off' : 'eye'} size={textRatio(26)} /></Pressable>} />

        <View />
        <Center w={'100%'} justifyContent="center" >
          <TouchableOpacity><Text style={styles.loginText}>Register</Text></TouchableOpacity>
          <Text style={styles.forgotText}>Or have an account?</Text>
          <TouchableOpacity onPress={() => {
            navigate(screens.LOGIN)
          }}><Text style={styles.forgotText2}>Login now</Text></TouchableOpacity>
        </Center>
      </View>
    </AuthLayout>
  );
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthRatio(6),
    alignItems: 'flex-start'
  },
  loginText: {
    color: colors.gray[300],
    fontFamily: fonts.poppins_extra_bold,
    fontSize: textRatio(35),
    paddingTop: heightRatio(7.5),
  },
  line1: {
    color: colors.gray[400],
    fontSize: textRatio(18),
    fontFamily: fonts.poppins_medium,
    marginTop: heightRatio(1)
  },
  forgotText: {
    color: colors.gray[300],
    fontFamily: fonts.poppins_medium,
    fontSize: textRatio(17),
    marginTop: heightRatio(1.5)
  },
  forgotText2: {
    color: colors.darkblue[600],
    fontFamily: fonts.poppins_medium,
    fontSize: textRatio(17),
    marginTop: heightRatio(1.5),
    paddingBottom: heightRatio(6)
  }
});