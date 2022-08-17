import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Switch} from 'native-base';
import {fonts} from 'theme/fonts';
import {textRatio} from 'utils/functions/textRatio';
import {colors} from 'theme/colors';

type Props = {
  label?: string;
};

const SwitchWithLabel = (props: Props) => {
  const {label} = props;
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <Switch
        offTrackColor={colors.gray[300]}
        onTrackColor={colors.darkblue[700]}
      />
    </View>
  );
};

export default SwitchWithLabel;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.poppins_regular,
    fontSize: textRatio(13),
  },
});
