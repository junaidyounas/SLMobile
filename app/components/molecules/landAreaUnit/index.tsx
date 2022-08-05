import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectionTab from 'components/atoms/selectionTab';
import {widthRatio} from 'utils/functions/pixelRatio';
import {CONDITIONS} from 'enum/Conditions';
import {LANDTYPE} from 'enum/Land.enum';
import {LandAreaEnum} from 'enum/LandArea.enum';

type Props = {
  selectedTab: string;
  onChange: any;
};

const LandAreaUnit = (props: Props) => {
  const {selectedTab, onChange} = props;
  return (
    <View style={styles.container}>
      <SelectionTab
        isSelected={selectedTab == LandAreaEnum.ACRE}
        onChange={onChange}
        title={LandAreaEnum.ACRE}
      />
      <SelectionTab
        isSelected={selectedTab == LandAreaEnum.KANAL}
        onChange={onChange}
        title={LandAreaEnum.KANAL}
      />
      <SelectionTab
        isSelected={selectedTab == LandAreaEnum.MARLA}
        onChange={onChange}
        title={LandAreaEnum.MARLA}
      />
      <SelectionTab
        isSelected={selectedTab == LandAreaEnum.SQUAREFEET}
        onChange={onChange}
        title={LandAreaEnum.SQUAREFEET}
      />
      <SelectionTab
        isSelected={selectedTab == LandAreaEnum.SQUAREMETER}
        onChange={onChange}
        title={LandAreaEnum.SQUAREMETER}
      />
      <SelectionTab
        isSelected={selectedTab == LandAreaEnum.SQUAREYARDS}
        onChange={onChange}
        title={LandAreaEnum.SQUAREYARDS}
      />
    </View>
  );
};

export default LandAreaUnit;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
