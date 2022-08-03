import ButtonComponent from 'components/base/button';
import PriceRangeChooser from 'components/molecules/priceRanger';
import CategorySelector from 'components/organisms/categorySelector';
import LocationSelector from 'components/organisms/locationSelector';
import {Text, View} from 'native-base';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addGTPrice, addLTPrice} from 'store/appState/appSlice';
import {IAppState} from 'store/IAppState';
import {fonts} from 'theme/fonts';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';

type Props = {};

const FilterScreen = (props: Props) => {
  const dispatch = useDispatch();

  const pricegt = useSelector((state: IAppState) => state.app.pricegt);
  const pricelt = useSelector((state: IAppState) => state.app.pricelt);

  const [minPrice, setMinPrice] = useState(pricegt);
  const [maxPrice, setMaxPrice] = useState(pricelt);
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
        <CategorySelector />
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
          onPress={() => {
            dispatch(addGTPrice(Number(minPrice)));
            dispatch(addLTPrice(Number(maxPrice)));
            navigate(screens.HOME);
          }}
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
