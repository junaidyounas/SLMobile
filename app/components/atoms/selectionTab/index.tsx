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
    flex: 1,
    minWidth: widthRatio(40),
    padding: widthRatio(0),
  },
  box: {
    paddingVertical: heightRatio(1),
    marginBottom: heightRatio(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthRatio(2),
    marginRight: widthRatio(1),
  },
});
