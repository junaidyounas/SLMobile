import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
type Props = {};

const ConnectBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnBg}>
        <FontAwesome
          name="send"
          color={colors.darkblue[600]}
          size={widthRatio(5)}
        />
      </View>
      <View style={styles.btnBg}>
        <MaterialIcons
          name="wifi-calling"
          color={colors.darkblue[600]}
          size={widthRatio(6)}
        />
      </View>
    </View>
  );
};

export default ConnectBar;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(100),
    backgroundColor: colors.darkblue[700],
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btnBg: {
    width: widthRatio(10),
    height: widthRatio(10),
    margin: widthRatio(2),
    borderRadius: widthRatio(2),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
