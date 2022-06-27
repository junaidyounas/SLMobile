import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Pressable, Text} from 'native-base';
import {globalstyles} from 'theme/globalStyles';
import {colors} from 'theme/colors';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';

type Props = {
  title: string;
  isSelected: boolean;
  onChange: any;
};

const SelectionTab = (props: Props) => {
  const {title, isSelected, onChange} = props;
  return (
    <Pressable
      onPress={() => {
        onChange(title);
      }}
      style={styles.container}>
      <Box
        style={styles.box}
        bg={
          isSelected
            ? globalstyles.btnGradient
            : globalstyles.btnDisabledGradient
        }>
        <Text color={colors.gray[100]}>{title}</Text>
      </Box>
    </Pressable>
  );
};

export default SelectionTab;

const styles = StyleSheet.create({
  container: {
    width: '45%',
  },
  box: {
    paddingVertical: heightRatio(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthRatio(2),
  },
});
