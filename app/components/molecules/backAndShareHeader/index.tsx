import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {textRatio} from 'utils/functions/textRatio';
import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {};

const BackAndShareButtonHeader = (props: Props) => {
  return (
    <View style={styles.headerBar}>
      <Ionicons
        size={textRatio(30)}
        name="chevron-back-sharp"
        color={colors.gray[100]}
      />
      <Ionicons
        size={textRatio(30)}
        name="share-social-sharp"
        color={colors.gray[100]}
      />
    </View>
  );
};

export default BackAndShareButtonHeader;

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: widthRatio(3),
    paddingVertical: heightRatio(2),
    justifyContent: 'space-between',
    backgroundColor: colors.darkblue[600],
  },
});
