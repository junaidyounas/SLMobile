import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectionTab from 'components/atoms/selectionTab';
import {widthRatio} from 'utils/functions/pixelRatio';
import {CONDITIONS} from 'enum/Conditions';

type Props = {
  selectedTab: string;
  onChange: any;
};

const ConditionTabs = (props: Props) => {
  const {selectedTab, onChange} = props;
  return (
    <View style={styles.container}>
      <SelectionTab
        isSelected={selectedTab == CONDITIONS.NEW}
        onChange={onChange}
        title={CONDITIONS.NEW}
      />
      <SelectionTab
        isSelected={selectedTab == CONDITIONS.USED}
        onChange={onChange}
        title={CONDITIONS.USED}
      />
    </View>
  );
};

export default ConditionTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: widthRatio(3),
    justifyContent: 'space-between',
  },
});
