import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {View} from 'native-base';
import {colors} from 'theme/colors';
import {heightRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';
import {fonts} from 'theme/fonts';

type Props = {
  condition?: string;
  title: string;
};

const DetailsTable = (props: Props) => {
  const {condition, title} = props;
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.conditionText}>{title}</Text>
        <Text style={styles.conditionText}>{condition}</Text>
      </View>
    </View>
  );
};

export default DetailsTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    borderTopWidth: 0.5,
    borderColor: colors.gray[200],
    paddingVertical: heightRatio(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conditionText: {
    color: colors.gray[100],
    fontSize: textRatio(14),
    fontFamily: fonts.poppins_light,
  },
});
