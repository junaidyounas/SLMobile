import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Button, Pressable, Text} from 'native-base';
import {globalstyles} from 'theme/globalStyles';
import {widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {fonts} from 'theme/fonts';

type Props = {
  title: string;
  isDisabled?: boolean;
  onPress: any;
  isLoading?: boolean;
  width?: number;
};

const ButtonComponent = (props: Props) => {
  const {title, isDisabled, onPress, isLoading, width} = props;
  let otherContainerStyles = [];
  if (width) {
    otherContainerStyles.push({width: widthRatio(width)});
  }
  return (
    <Box
      style={[styles.container, otherContainerStyles]}
      bg={
        isDisabled ? globalstyles.btnDisabledGradient : globalstyles.btnGradient
      }>
      <Button
        _text={{
          color: colors.white,
          fontFamily: fonts.poppins_medium,
        }}
        isDisabled={isDisabled}
        onPress={onPress}
        isLoading={isLoading}
        bg={'transparent'}>
        {title}
      </Button>
    </Box>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthRatio(3),
    borderRadius: widthRatio(2),
    paddingVertical: widthRatio(1),
  },
});
