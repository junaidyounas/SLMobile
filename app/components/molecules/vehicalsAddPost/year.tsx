import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OptionChooser from '../optionChooser';
import {AppConstants} from 'constants/appConstants';
import {years} from 'data/years';

type Props = {
  subCategory: string;
  value: string;
  setFieldValue: any;
};

const VehicalsYear = (props: Props) => {
  const {value, setFieldValue} = props;
  return (
    <>
      <OptionChooser
        marginHorizontal={1.5}
        id={AppConstants.pickerIds.makeYear}
        marginTop={2}
        data={years}
        placeholder="Year"
        setValue={(e: any) => {
          setFieldValue('year', e.title);
        }}
        value={value}
      />
    </>
  );
};

export default VehicalsYear;

const styles = StyleSheet.create({});
