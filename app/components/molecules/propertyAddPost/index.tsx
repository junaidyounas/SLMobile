import LabelText from 'components/atoms/labelText';
import {View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import InputTextView from '../inputText';
import IsPropertyFurnished from '../isFurnished';
import LandAreaUnit from '../landAreaUnit';
import LandTypesTabs from '../landType';
import RoomsCounter from '../roomCount';

type Props = {
  subCategory: string;
  setFieldValue?: any;
  setLandType?: any;
  setAreaUnit?: any;
  landType: string;
  areaUnit: string;
  area: string;
  setArea: any;
  setIsFurnished: any;
  isFurnished: boolean;
  rooms: number;
  setRooms: any;
  bathrooms: number;
  kitchens: number;
  setBathrooms: any;
  setKitchens: any;
};

const PropertyAddPost = (props: Props) => {
  const {
    subCategory,
    setAreaUnit,
    landType,
    setLandType,
    areaUnit,
    area,
    setArea,
    setIsFurnished,
    isFurnished,
    rooms,
    setRooms,
    kitchens,
    bathrooms,
    setBathrooms,
    setKitchens,
  } = props;
  return (
    <>
      {subCategory === 'Land' || subCategory === 'Plots' ? (
        <>
          <LabelText label={'Condition'} />
          <LandTypesTabs selectedTab={landType} onChange={setLandType} />
          <View pt={2} />
          <LabelText label={'Area Type'} />
          <LandAreaUnit selectedTab={areaUnit} onChange={setAreaUnit} />
          <InputTextView
            value={area}
            onChange={setArea}
            // error={touched.area ? errors.area : ''}
            // paddingHorizontal={3}
            // onBlur={() => setFieldTouched('area')}
            placeholder="Area"
            label={'Area'}
            keyboardType="numeric"
          />
        </>
      ) : null}
      {subCategory === 'Apartments or Flats' ||
      subCategory === 'Portions' ||
      subCategory === 'Rooms' ||
      subCategory === 'Guest Houses' ||
      subCategory === 'Vacation Rentals' ? (
        <>
          <LabelText label={'Furnished'} />
          <IsPropertyFurnished
            selectedTab={isFurnished}
            onChange={setIsFurnished}
          />
          <View pt={2} />
          <RoomsCounter
            title="Rooms"
            rooms={rooms}
            onChange={(value: number) => setRooms(value)}
          />
          <View pt={2} />
          <RoomsCounter
            title="Bathrooms"
            rooms={bathrooms}
            onChange={(value: number) => setBathrooms(value)}
          />
          <View pt={2} />
          <RoomsCounter
            title="Kitchens"
            rooms={kitchens}
            onChange={(value: number) => setKitchens(value)}
          />
          <View pt={2} />
        </>
      ) : null}
    </>
  );
};

export default PropertyAddPost;

const styles = StyleSheet.create({});
