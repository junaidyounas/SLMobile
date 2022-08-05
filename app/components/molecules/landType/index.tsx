import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectionTab from 'components/atoms/selectionTab';
import {widthRatio} from 'utils/functions/pixelRatio';
import {CONDITIONS} from 'enum/Conditions';
import {LANDTYPE} from 'enum/Land.enum';

type Props = {
  selectedTab: string;
  onChange: any;
};

const LandTypesTabs = (props: Props) => {
  const {selectedTab, onChange} = props;
  return (
    <View style={styles.container}>
      <SelectionTab
        isSelected={selectedTab == LANDTYPE.AGRI}
        onChange={onChange}
        title={LANDTYPE.AGRI}
      />
      <SelectionTab
        isSelected={selectedTab == LANDTYPE.COMPLOTS}
        onChange={onChange}
        title={LANDTYPE.COMPLOTS}
      />
      <SelectionTab
        isSelected={selectedTab == LANDTYPE.INDSULAND}
        onChange={onChange}
        title={LANDTYPE.INDSULAND}
      />
      <SelectionTab
        isSelected={selectedTab == LANDTYPE.RESPLOTS}
        onChange={onChange}
        title={LANDTYPE.RESPLOTS}
      />
      <SelectionTab
        isSelected={selectedTab == LANDTYPE.OTHER}
        onChange={onChange}
        title={LANDTYPE.OTHER}
      />
    </View>
  );
};

export default LandTypesTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
