import { StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Text, View } from 'native-base'
import { AppConstants } from 'constants/appConstants'
import { fonts } from 'theme/fonts'
import { colors } from 'theme/colors'

type Props = {
          children?: any
}

const AuthLayout = (props: Props) => {
  const {children} = props;
  return (
    <View bg="primary.900" style={styles.container}>
      <Text style={styles.headerText}>{`Hello, ${'\n'}Welcome back to the ${AppConstants.app_name}`}</Text>
      {children}
    </View>
  );
}

export default AuthLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
            fontFamily: fonts.poppins_extra_bold_italic,
            color: colors.white
  }
});