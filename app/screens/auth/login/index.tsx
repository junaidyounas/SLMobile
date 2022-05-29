import AuthLayout from 'components/layouts/Auth'
import { AppConstants } from 'constants/appConstants'
import { Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
type Props = {}

const LoginScreen = (props: Props) => {
  return (
    <AuthLayout>
      <Text>Hello World</Text>
    </AuthLayout>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {

  }
});