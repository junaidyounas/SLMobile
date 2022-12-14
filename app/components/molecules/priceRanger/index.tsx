import {Input} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addGTPrice, addLTPrice} from 'store/appState/appSlice';
import {IAppState} from 'store/IAppState';
import {colors} from 'theme/colors';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';

type Props = {
  setMaxPrice: any;
  setMinPrice: any;
  maxPrice: number;
  minPrice: number;
};

const PriceRangeChooser = (props: Props) => {
  const {setMaxPrice, setMinPrice, minPrice, maxPrice} = props;
  const dispatch = useDispatch();

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
            setMinPrice(Number(value));
          }}
          value={minPrice ? minPrice?.toString() : undefined}
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
          value={maxPrice ? maxPrice?.toString() : undefined}
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
