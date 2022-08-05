import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BrandChooser from '../brandChooser';
import {AppConstants} from 'constants/appConstants';
import {carMake} from 'data/carMake';

type Props = {
  make: string;
  setFieldValue: any;
};

const VehicalMake = (props: Props) => {
  const {make, setFieldValue} = props;
  return (
    <>
      <BrandChooser
        marginHorizontal={1.5}
        id={AppConstants.pickerIds.carMake}
        marginTop={2}
        data={carMake}
        placeholder="Make"
        setValue={(e: any) => {
          setFieldValue('make', e.title);
        }}
        value={make}
      />
    </>
  );
};

export default VehicalMake;

const styles = StyleSheet.create({});
