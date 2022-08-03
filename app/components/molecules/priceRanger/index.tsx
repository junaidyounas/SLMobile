import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {Input} from 'native-base';
import {colors} from 'theme/colors';

type Props = {
  setMaxPrice: any;
  setMinPrice: any;
  maxPrice: number;
  minPrice: number;
};

const PriceRangeChooser = (props: Props) => {
  const {maxPrice, minPrice, setMaxPrice, setMinPrice} = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          width={widthRatio(46)}
          style={styles.input}
          placeholder={'Min Value'}
          placeholderTextColor={colors.gray[500]}
          borderWidth={0}
          textDecorationLine={'none'}
          onChangeText={(value: string) => {
            if (Number(value) > 500) {
              setMinPrice(Number(value));
            }
          }}
          value={minPrice.toString()}
        />
        <View style={{width: widthRatio(1)}} />
        <Input
          width={widthRatio(46)}
          style={styles.input}
          placeholder={'Max Value'}
          placeholderTextColor={colors.gray[500]}
          borderWidth={0}
          textDecorationLine={'none'}
          onChangeText={(value: string) => {
            if (Number(value) < 999999999) {
              setMaxPrice(Number(value));
            }
          }}
          value={maxPrice.toString()}
        />
      </View>
    </View>
  );
};

export default PriceRangeChooser;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(92),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    height: heightRatio(6),
  },
});
