import { StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { ScrollView, Text, View } from 'native-base'
import { AppConstants } from 'constants/appConstants'
import { fonts } from 'theme/fonts'
import { colors } from 'theme/colors'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'

type Props = {
  children?: any,
  header?: string
}

const AuthLayout = (props: Props) => {
  const { children, header } = props;
  return (
    <ScrollView bg="base.900" style={styles.container}>
      {header ? <Text fontSize="4xl" style={styles.headerText}>{header}</Text> : null}
      {children}
    </ScrollView>
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