import {StyleSheet} from 'react-native';
import React from 'react';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import ButtonComponent from 'components/base/button';
import Saperator from 'components/atoms/saperator';
import LabelText from 'components/atoms/labelText';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {fonts} from 'theme/fonts';
import {Text, View} from 'native-base';
import SwitchWithLabel from 'components/molecules/switchWithLabel';
import {colors} from 'theme/colors';

type Props = {};

const PhoneSettings = (props: Props) => {
  return (
    <View style={styles.container}>
      <GradientTopBarWithBackBtn title={'Phone Settings'} isBack />
      <Saperator isBorder={false} marginTop={2} />
      <ButtonComponent height={5} title={'Add Number'} onPress={undefined} />
      <Saperator isBorder={false} marginTop={2} />
      <View style={styles.numberList}>
        <LabelText label={'Numbers'} />
        <View style={styles.numberContainer}>
          <Text style={styles.number}>+923121212123</Text>
          <View style={styles.switchBtns}>
            <SwitchWithLabel label={'Whatsapp'} />
            <SwitchWithLabel label={'Call'} />
            <SwitchWithLabel label={'Message'} />
            <SwitchWithLabel label={'Imo'} />
          </View>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>+923121212123</Text>
          <View style={styles.switchBtns}>
            <SwitchWithLabel label={'Whatsapp'} />
            <SwitchWithLabel label={'Call'} />
            <SwitchWithLabel label={'Message'} />
            <SwitchWithLabel label={'Imo'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PhoneSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  numberList: {
    paddingHorizontal: widthRatio(3),
  },
  number: {
    fontFamily: fonts.poppins_light,
    paddingVertical: heightRatio(0.5),
  },
  numberContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    borderWidth: 0.6,
    borderColor: colors.gray[300],
    marginBottom: heightRatio(1),
    paddingHorizontal: widthRatio(2),
    paddingVertical: widthRatio(2),
    borderRadius: widthRatio(2),
  },
  switchBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
