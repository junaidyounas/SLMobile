import ButtonComponent from 'components/base/button';
import InputTextView from 'components/molecules/inputText';
import OptionChooser from 'components/molecules/optionChooser';
import PriceRangeChooser from 'components/molecules/priceRanger';
import PropertyAddPost from 'components/molecules/propertyAddPost';
import CategorySelector from 'components/organisms/categorySelector';
import LocationSelector from 'components/organisms/locationSelector';
import {AppConstants} from 'constants/appConstants';
import {carMake} from 'data/carMake';
import {MobileBrands} from 'data/mobileBrands';
import {years} from 'data/years';
import {Text, View} from 'native-base';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFilterMake,
  addGTPrice,
  addLTPrice,
  addSearchBrand,
  addFilterYear,
  addFilterLandType,
  addFilterAreaUnit,
  addFilterArea,
  addFilterIsFurnished,
} from 'store/appState/appSlice';
import {IAppState} from 'store/IAppState';
import {fonts} from 'theme/fonts';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';

type Props = {};

const FilterScreen = (props: Props) => {
  const dispatch = useDispatch();

  const pricegt = useSelector((state: IAppState) => state.app.pricegt);
  const pricelt = useSelector((state: IAppState) => state.app.pricelt);
  const searchCategory = useSelector(
    (state: IAppState) => state.app.searchCategory,
  );

  const searchBrand = useSelector((state: IAppState) => state.app.searchBrand);
  const appState = useSelector((state: IAppState) => state.app);

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
        {searchCategory.subCategory == 'Mobile Phones' ? (
          <OptionChooser
            marginHorizontal={0}
            id={AppConstants.pickerIds.mobileBrand}
            marginTop={2}
            data={MobileBrands}
            placeholder="Select Brand"
            setValue={(e: any) => {
              // setFieldValue('brand', e.title);
              dispatch(addSearchBrand(e.title));
            }}
            value={searchBrand}
          />
        ) : null}
        {/* vehical make */}
        {appState.searchCategory?.subCategory === 'Cars' ||
        appState.searchCategory?.subCategory === 'Cars Accessories' ? (
          <OptionChooser
            id={AppConstants.pickerIds.carMake}
            marginTop={2}
            data={carMake}
            placeholder="Make"
            setValue={(e: any) => {
              dispatch(addFilterMake(e.title));
            }}
            value={appState.make}
          />
        ) : null}
        {/* vehical years */}
        {appState.searchCategory?.subCategory === 'Cars' ||
        appState.searchCategory?.subCategory === 'Cars Accessories' ||
        appState.searchCategory?.subCategory === 'Buses' ||
        appState.searchCategory?.subCategory === 'Trucks' ||
        appState.searchCategory?.subCategory === 'Rickshaw' ||
        appState.searchCategory?.subCategory === 'Chingchi' ||
        appState.searchCategory?.subCategory === 'Tractors' ||
        appState.searchCategory?.subCategory === 'Trailers' ||
        appState.searchCategory?.subCategory === 'Vans' ? (
          <OptionChooser
            id={AppConstants.pickerIds.makeYear}
            marginTop={2}
            data={years}
            placeholder="Year"
            setValue={(e: any) => {
              dispatch(addFilterYear(e.title));
            }}
            value={appState.year}
          />
        ) : null}

        {/* Property Filter */}
        <View pt={2} />
        <PropertyAddPost
          subCategory={appState.searchCategory?.subCategory}
          setLandType={(value: string) => dispatch(addFilterLandType(value))}
          setAreaUnit={(value: string) => {
            dispatch(addFilterAreaUnit(value));
          }}
          landType={appState.landType}
          areaUnit={appState.areaUnit}
          area={''}
          setArea={undefined}
          setIsFurnished={(value: boolean) => {
            dispatch(addFilterIsFurnished(value));
          }}
          isFurnished={appState.isFurnished}
        />
        {appState.areaUnit ? (
          <InputTextView
            value={appState.area}
            onChange={(value: number) => dispatch(addFilterArea(value))}
            marginTop={2}
            placeholder="Area"
            label={'Area'}
            keyboardType="numeric"
          />
        ) : null}

        {/* End Property Filter */}

        <Text style={[styles.label, {paddingTop: heightRatio(2)}]}>
          Price Range
        </Text>
        <PriceRangeChooser
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice as any}
          minPrice={minPrice as any}
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
