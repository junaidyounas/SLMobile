import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Box, Text} from 'native-base';
import {globalstyles} from 'theme/globalStyles';
import {colors} from 'theme/colors';
import {widthRatio} from 'utils/functions/pixelRatio';

type Props = {
  onPress: any;
  width?: number;
  title: string;
};

const MiniButton = (props: Props) => {
  const {onPress, width, title} = props;
  const ifWidth = width
    ? {
        width: widthRatio(width),
      }
    : {};
  return (
    <TouchableOpacity style={[ifWidth]} onPress={onPress}>
      <Box
        style={styles.container}
        borderRadius={6}
        bg={globalstyles.btnGradient}>
        <Text p={1} color={colors.white}>
          {title ? title : 'Select Images'}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default MiniButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
