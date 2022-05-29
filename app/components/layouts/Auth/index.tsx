import { StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Text, View } from 'native-base'
import { AppConstants } from 'constants/appConstants'
import { fonts } from 'theme/fonts'
import { colors } from 'theme/colors'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'

type Props = {
          children?: any
}

const AuthLayout = (props: Props) => {
  const {children} = props;
  return (
    <View bg="base.900" style={styles.container}>
      <Text fontSize="4xl" style={styles.headerText}>{`Hello, ${'\n'}Welcome back to the ${AppConstants.app_name}`}</Text>
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
            fontFamily: fonts.poppins_semi_bold,
            color: colors.white,
            paddingHorizontal: widthRatio(6),
            paddingTop: heightRatio(6)
  }
});