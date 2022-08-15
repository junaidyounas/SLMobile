import {StyleSheet} from 'react-native';
import React from 'react';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import {FlatList, Text, View} from 'native-base';
import SinglePostItem from 'components/organisms/singlePostItem';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import ProfileContainer from 'components/organisms/profileContainer';
import AccountOption from 'components/atoms/accountOption';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {textRatio} from 'utils/functions/textRatio';

type Props = {};

const AccountScreen = (props: Props) => {
  return (
    <>
      <ProfileContainer />
      <AccountOption
        Icon={() => {
          return <MaterialIcons name="favorite" size={textRatio(26)} />;
        }}
        onPress={undefined}
        title={'Favourite Posts'}
      />
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
