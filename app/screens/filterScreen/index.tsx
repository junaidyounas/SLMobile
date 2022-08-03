import MultiSliderComponent from 'components/atoms/multiSlider';
import ButtonComponent from 'components/base/button';
import PriceRangeChooser from 'components/molecules/priceRanger';
import CategorySelector from 'components/organisms/categorySelector';
import LocationSelector from 'components/organisms/locationSelector';
import {Box, Text, View} from 'native-base';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';
import React, {useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {fonts} from 'theme/fonts';
import {globalstyles} from 'theme/globalStyles';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';

type Props = {};

const FilterScreen = (props: Props) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedSubCat, setSelectedSubCat] = useState('');
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(100000);
  return (
    <View style={styles.container}>
      <Text style={[styles.label, {paddingHorizontal: widthRatio(3)}]}>
        Set Location
      </Text>
      <LocationSelector flag={'search'} isLabel={false} />
      <View style={styles.innerContainer}>
        <Text style={[styles.label, {paddingBottom: heightRatio(0.5)}]}>
          Set Category
        </Text>
        <CategorySelector
          category={selectedCategoryId}
          setCategory={setSelectedCategoryId}
          selectedSubCat={selectedSubCat}
          setSelectedSubCat={setSelectedSubCat}
        />
        <Text style={[styles.label, {paddingTop: heightRatio(2)}]}>
          Price Range
        </Text>
        <PriceRangeChooser
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          minPrice={minPrice}
        />
      </View>
      <View style={styles.btnContainer}>
        <ButtonComponent
          width={90}
          title={'Done'}
          onPress={() => navigate(screens.HOME)}
        />
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: heightRatio(2),
  },
  innerContainer: {
    paddingHorizontal: widthRatio(3),
    paddingVertical: heightRatio(2),
  },
  label: {
    fontFamily: fonts.poppins_medium,
    fontSize: textRatio(18),
  },
  btnContainer: {
    position: 'absolute',
    bottom: 15,
    width: widthRatio(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
