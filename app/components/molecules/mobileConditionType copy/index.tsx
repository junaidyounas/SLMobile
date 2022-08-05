import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectionTab from 'components/atoms/selectionTab';
import {widthRatio} from 'utils/functions/pixelRatio';
import {CONDITIONS} from 'enum/Conditions';

type Props = {
  selectedTab: string;
  onChange: any;
};

const MobileConditionTabs = (props: Props) => {
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
      <SelectionTab
        isSelected={selectedTab == CONDITIONS.OPEN}
        onChange={onChange}
        title={CONDITIONS.OPEN}
      />
      <SelectionTab
        isSelected={selectedTab == CONDITIONS.REFURB}
        onChange={onChange}
        title={CONDITIONS.REFURB}
      />
      <SelectionTab
        isSelected={selectedTab == CONDITIONS.NOTWORKING}
        onChange={onChange}
        title={CONDITIONS.NOTWORKING}
      />
    </View>
  );
};

export default MobileConditionTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: widthRatio(3),
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
