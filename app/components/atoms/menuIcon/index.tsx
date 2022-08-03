import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'theme/colors';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {Box, Pressable} from 'native-base';
import {textRatio} from 'utils/functions/textRatio';
import {globalstyles} from 'theme/globalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';

type Props = {};

const MenuIcon = (props: Props) => {
  return (
    <Pressable
      onPress={() => {
        navigate(screens.FILTER_SCREEN);
      }}>
      <Box
        borderRadius={8}
        bg={globalstyles.btnGradient}
        style={styles.container}>
        <MaterialCommunityIcons
          name="filter"
          size={textRatio(30)}
          color={colors.white}
        />
      </Box>
    </Pressable>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  container: {
    width: heightRatio(6.5),
    height: heightRatio(6.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
