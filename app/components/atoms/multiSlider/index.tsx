import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {Box, Pressable} from 'native-base';
import {globalstyles} from 'theme/globalStyles';

type Props = {
  setMultiSliderValue: any;
  multiSliderValue: number[];
};

const MultiSliderComponent = (props: Props) => {
  const {setMultiSliderValue, multiSliderValue} = props;
  const [isSmall, setIsSmall] = useState(true);
  const multiSliderValuesChange = (values: any) => setMultiSliderValue(values);
  return (
    <View style={styles.container}>
      <View style={styles.rangeSelectContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            multiSliderValuesChange([500, 1000000]);
            setIsSmall(true);
          }}>
          <Box bg={globalstyles.btnGradient} style={styles.rangeSelectBtn}>
            <Text style={styles.rangeSelectText}>Small Range</Text>
          </Box>
        </TouchableWithoutFeedback>
        <View style={{width: 7}} />
        <TouchableWithoutFeedback
          onPress={() => {
            multiSliderValuesChange([100000, 999999999]);
            setIsSmall(false);
          }}>
          <Box bg={globalstyles.btnGradient} style={styles.rangeSelectBtn}>
            <Text style={styles.rangeSelectText}>Big Range</Text>
          </Box>
        </TouchableWithoutFeedback>
      </View>
      <MultiSlider
        values={[multiSliderValue[0], multiSliderValue[1]]}
        sliderLength={widthRatio(92)}
        onValuesChange={multiSliderValuesChange}
        min={isSmall ? 500 : 100000}
        max={isSmall ? 100000 : 999999999}
        step={isSmall ? 2000 : 200000}
        allowOverlap
        snapped
      />
      <View style={styles.priceContainer}>
        <Text>{multiSliderValue[0]}</Text>
        <Text>{multiSliderValue[1]}</Text>
      </View>
    </View>
  );
};

export default MultiSliderComponent;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(94),
    alignItems: 'center',
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rangeSelectContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rangeSelectBtn: {
    flex: 1,
    height: heightRatio(4.5),
    alignItems: 'center',
    backgroundColor: colors.darkblue[700],
    justifyContent: 'center',
    borderRadius: widthRatio(3),
  },
  rangeSelectText: {
    color: colors.white,
  },
});
