import LabelText from 'components/atoms/labelText';
import {View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import LandAreaUnit from '../landAreaUnit';
import LandTypesTabs from '../landType';

type Props = {
  subCategory: string;
  setFieldValue?: any;
  setLandType?: any;
  setAreaUnit?: any;
  landType: string;
  areaUnit: string;
};

const PropertyAddPost = (props: Props) => {
  const {subCategory, setAreaUnit, landType, setLandType, areaUnit} = props;
  return (
    <>
      {subCategory === 'Land' || subCategory === 'Plots' ? (
        <>
          <LabelText label={'Condition'} />
          <LandTypesTabs selectedTab={landType} onChange={setLandType} />
          <View pt={2} />
          <LabelText label={'Area Type'} />
          <LandAreaUnit selectedTab={areaUnit} onChange={setAreaUnit} />
        </>
      ) : null}
    </>
  );
};

export default PropertyAddPost;

const styles = StyleSheet.create({});
