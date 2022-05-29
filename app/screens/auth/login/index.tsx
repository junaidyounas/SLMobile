import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from 'native-base'
import { colors } from 'theme/colors'
import AuthLayout from 'components/layouts/Auth'

type Props = {}

const LoginScreen = (props: Props) => {
  return (
    <AuthLayout>
      <Text>LoginScreen</Text>
    </AuthLayout>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});