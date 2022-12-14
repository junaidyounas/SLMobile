import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Text, View} from 'native-base';
import {colors} from 'theme/colors';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';

type Props = {};

const CustomToast = (props: Props) => {
  return (
    <View style={styles.container}>
      <Box bg={colors.white} px="5" py="5" rounded="sm">
        <Text style={styles.text}>{'Unable to create chat on this ad!'}</Text>
      </Box>
    </View>
  );
};

export default CustomToast;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(100),
    height: heightRatio(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.darkblue[700],
  },
});
