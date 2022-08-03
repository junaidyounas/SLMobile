import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {fonts} from 'theme/fonts';
import {textRatio} from 'utils/functions/textRatio';
import LocationSelector from 'components/organisms/locationSelector';
import CategorySelector from 'components/organisms/categorySelector';

type Props = {};

const FilterScreen = (props: Props) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedSubCat, setSelectedSubCat] = useState('');
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
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
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
});
