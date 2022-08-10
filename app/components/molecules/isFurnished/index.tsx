import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectionTab from 'components/atoms/selectionTab';
import {widthRatio} from 'utils/functions/pixelRatio';
import {CONDITIONS} from 'enum/Conditions';
import {LANDTYPE} from 'enum/Land.enum';
import {FURNISHED} from 'enum/Furnished';

type Props = {
  selectedTab: boolean;
  onChange: any;
};

const IsPropertyFurnished = (props: Props) => {
  const {selectedTab, onChange} = props;
  return (
    <View style={styles.container}>
      <SelectionTab
        isSelected={selectedTab == true}
        onChange={() => {
          onChange(true);
        }}
        title={FURNISHED.FURNISHED}
      />
      <SelectionTab
        isSelected={selectedTab == false}
        onChange={() => {
          onChange(false);
        }}
        title={FURNISHED.UN_FURNISHED}
      />
    </View>
  );
};

export default IsPropertyFurnished;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
