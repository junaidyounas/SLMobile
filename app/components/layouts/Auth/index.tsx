import { StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Text, View } from 'native-base'

type Props = {
          children?: any
}

const AuthLayout = (props: Props) => {
  const {children} = props;
  return (
    <View bg="primary.900" style={styles.container}>
      {children}
    </View>
  );
}

export default AuthLayout

const styles = StyleSheet.create({
  container: {
            flex: 1
  }
});