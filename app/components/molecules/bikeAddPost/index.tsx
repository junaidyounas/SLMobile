import LabelText from 'components/atoms/labelText';
import {AppConstants} from 'constants/appConstants';
import {bikeMake, BikeMakes} from 'data/bikeMake';
import React from 'react';
import {StyleSheet} from 'react-native';
import OptionChooser from '../optionChooser';

type Props = {
  subCategory: string;
  bikeMake: string;
  setBikeMake: any;
};

const BikeAddPost = (props: Props) => {
  const {subCategory, setBikeMake, bikeMake} = props;
  return (
    <>
      {subCategory === 'Bikes' ? (
        <>
          <LabelText label={'Make'} />
          <OptionChooser
            id={AppConstants.pickerIds.bikeMake}
            data={BikeMakes}
            placeholder="Select Bike Brand"
            setValue={(e: any) => {
              setBikeMake(e);
            }}
            value={bikeMake}
          />
        </>
      ) : null}
    </>
  );
};

export default BikeAddPost;

const styles = StyleSheet.create({});
