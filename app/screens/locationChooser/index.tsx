import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import {Input} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {textRatio} from 'utils/functions/textRatio';
type Props = {};

const LocationChooser = (props: Props) => {
  return (
    <View style={styles.container}>
      <GradientTopBarWithBackBtn title={'My Ads'} isBack />
      <View style={styles.inputView}>
        <Input
          variant="rounded"
          style={styles.input}
          placeholder="Search location"
          InputLeftElement={
            <View style={styles.locIcon}>
              <Ionicons name="location" size={textRatio(25)} />
            </View>
          }
        />
      </View>
    </View>
  );
};

export default LocationChooser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    width: widthRatio(100),
    height: heightRatio(9),
    paddingHorizontal: widthRatio(2),
    paddingVertical: heightRatio(1),
  },
  input: {
    width: widthRatio(100),
    height: heightRatio(5),
    borderRadius: widthRatio(3),
  },
  locIcon: {
    paddingLeft: widthRatio(3),
    marginRight: -widthRatio(2),
  },
});
