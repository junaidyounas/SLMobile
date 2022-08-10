import {StyleSheet} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import LabelText from 'components/atoms/labelText';
import {Pressable, Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {fonts} from 'theme/fonts';

type Props = {
  rooms: number;
  onChange: any;
};

const RoomsCounter = (props: Props) => {
  const {rooms, onChange} = props;
  const selectedStyle = {
    borderWidth: 1.5,
    borderColor: colors.darkblue[700],
  };
  return (
    <View style={styles.container}>
      <LabelText label={'Rooms'} />
      <View style={styles.innerContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i, j) => (
          <Pressable
            onPress={() => {
              onChange(Number(i));
            }}
            key={j}
            style={[styles.item, i == rooms ? selectedStyle : {}]}>
            <Text style={styles.text}>{i == 8 ? '8+' : i}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default RoomsCounter;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.black,
  },
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    paddingHorizontal: widthRatio(5),
    paddingVertical: widthRatio(2),
    // borderWidth: 0.4,
    borderRadius: widthRatio(5),
    marginHorizontal: widthRatio(1),
    marginTop: heightRatio(0.5),
    backgroundColor: colors.gray[200],
  },
  text: {
    color: colors.darkblue[700],
    fontFamily: fonts.poppins_medium,
  },
});
