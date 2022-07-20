import {StyleSheet} from 'react-native';
import React from 'react';
import {Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'theme/colors';

type Props = {
  fontSize?: number;
  location?: string;
  color?: string;
};

const LocationWithIcon = (props: Props) => {
  const {fontSize, location, color} = props;
  const ifColor = color ? {color: color} : {};
  return (
    <View style={styles.container}>
      <Ionicons
        name="location"
        size={textRatio(15)}
        color={color ? color : colors.darkblue[800]}
      />
      <Text
        noOfLines={1}
        style={[
          styles.locationText,
          fontSize ? {fontSize: textRatio(fontSize)} : {},
          ifColor,
        ]}>
        {location}
      </Text>
    </View>
  );
};

export default LocationWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: textRatio(14),
    paddingLeft: widthRatio(0.5),
    color: colors.gray[600],
  },
});
