import InputWithRightIcon from 'components/base/inputWithRightIcon';
import AuthLayout from 'components/layouts/Auth';
import {Center, Pressable, Text, View} from 'native-base';
import React, {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import {colors} from 'theme/colors';
import {fonts} from 'theme/fonts';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextWithBothSideLines from 'components/atoms/textWithBothSideLines';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';
import {AppConstants} from 'constants/appConstants';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {logMe} from 'utils/functions/logBinder';
import ButtonComponent from 'components/base/button';
import {userService} from 'services/userService';
type Props = {};

const LoginFormSchema = Yup.object({
  email: Yup.string()
    .email('Please enter valid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is Required'),
});

const LoginScreen = (props: Props) => {
  const formikRef = useRef<any>();
  const [isEyeOff, setIsEyeOff] = useState(false);

  function onLoginSubmit(email: string, password: string) {
    userService.loginViaEmailPassword(email, password).then(res => {
      logMe(res);
      navigate(screens.HOME);
    });
  }

  return (
    <AuthLayout
      header={`Hello, ${'\n'}Welcome back to the ${AppConstants.app_name}`}>
      <View style={styles.container}>
        <Text style={styles.line1}>Please sign in to proceed</Text>
        <Formik
          innerRef={formikRef}
          initialValues={{email: '', password: ''}}
          validationSchema={LoginFormSchema}
          onSubmit={values => onLoginSubmit(values.email, values.password)}>
          {({handleChange, touched, errors, values}) => (
            <>
              <InputWithRightIcon
                placeholder="Enter your email address"
                label="Email or Phone Number"
                value={values.email}
                onChange={handleChange('email')}
                marginTop={6}
                error={touched.email ? errors.email : ''}
                rightIcon={
                  <Ionicons
                    color={colors.darkblue[300]}
                    name="mail"
                    size={textRatio(26)}
                  />
                }
              />
              <InputWithRightIcon
                placeholder="Enter your password"
                label="Password"
                marginTop={2}
                value={values.password}
                error={touched.password ? errors.password : ''}
                onChange={handleChange('password')}
                rightIcon={
                  <Pressable onPress={() => setIsEyeOff(!isEyeOff)}>
                    <Ionicons
                      color={colors.darkblue[300]}
                      name={isEyeOff ? 'eye-off' : 'eye'}
                      size={textRatio(26)}
                    />
                  </Pressable>
                }
              />
            </>
          )}
        </Formik>

        <Text style={styles.forgotText}>
          Forgot Password?{' '}
          <Text
            onPress={() => {
              navigate(screens.EMAILASK);
            }}
            style={styles.forgotText2}>
            Click here
          </Text>
        </Text>

        {/* <TextWithBothSideLines marginTop={4} /> */}
        <View />

        <Center w={'100%'} justifyContent="center" pt={4}>
          <ButtonComponent
            width={88}
            title="Submit"
            onPress={() => {
              formikRef.current.handleSubmit();
              logMe('err', formikRef.current.errors);
            }}
          />
          <Text style={styles.forgotText}>Or dont't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(screens.REGISTER);
            }}>
            <Text style={styles.forgotText2}>Register now</Text>
          </TouchableOpacity>
        </Center>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthRatio(6),
    alignItems: 'flex-start',
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
    marginTop: heightRatio(1),
  },
  forgotText: {
    color: colors.gray[300],
    fontFamily: fonts.poppins_medium,
    fontSize: textRatio(17),
    marginTop: heightRatio(1.5),
  },
  forgotText2: {
    color: colors.darkblue[600],
    fontFamily: fonts.poppins_medium,
    fontSize: textRatio(17),
    marginTop: heightRatio(1.5),
    paddingBottom: heightRatio(6),
  },
});
