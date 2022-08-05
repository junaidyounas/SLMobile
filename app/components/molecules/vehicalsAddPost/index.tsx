import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BrandChooser from '../brandChooser';
import {AppConstants} from 'constants/appConstants';
import {years} from 'data/years';
import VehicalsMake from './year';
import {carMake} from 'data/carMake';
import VehicalMake from './make';

type Props = {
  subCategory: string;
  make: string;
  year: string;
  setFieldValue: any;
};

const VehicalsOptionsAddPost = (props: Props) => {
  const {subCategory, make, year, setFieldValue} = props;
  return (
    <>
      {subCategory === 'Cars' || subCategory === 'Cars Accessories' ? (
        <VehicalMake make={make} setFieldValue={setFieldValue} />
      ) : null}
      {subCategory === 'Cars' ||
      subCategory === 'Cars Accessories' ||
      subCategory === 'Buses' ||
      subCategory === 'Trucks' ||
      subCategory === 'Rickshaw' ||
      subCategory === 'Chingchi' ||
      subCategory === 'Tractors' ||
      subCategory === 'Trailers' ||
      subCategory === 'Vans' ? (
        <VehicalsMake
          subCategory={subCategory}
          value={year}
          setFieldValue={setFieldValue}
        />
      ) : null}
    </>
  );
};

export default VehicalsOptionsAddPost;

const styles = StyleSheet.create({});
