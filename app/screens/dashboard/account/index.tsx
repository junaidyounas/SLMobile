import {StyleSheet} from 'react-native';
import React from 'react';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import {FlatList, View} from 'native-base';
import SinglePostItem from 'components/organisms/singlePostItem';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import ProfileContainer from 'components/organisms/profileContainer';

type Props = {};

const AccountScreen = (props: Props) => {
  return (
    <>
      <ProfileContainer />
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthRatio(3),
  },
  row: {
    justifyContent: 'space-between',
    paddingBottom: heightRatio(2),
  },
});
