import {StyleSheet} from 'react-native';
import React from 'react';
import {FlatList, Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import BackAndShareButtonHeader from 'components/molecules/backAndShareHeader';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import SingleChatSessionItem from 'components/organisms/singleChatSessionItem';
import {colors} from 'theme/colors';

type Props = {};

const ChatSessions = (props: Props) => {
  return (
    <View style={styles.container}>
      <GradientTopBarWithBackBtn title={'My Ads'} isBack />
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separtor} />}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={SingleChatSessionItem}
      />
    </View>
  );
};

export default ChatSessions;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(100),
    height: heightRatio(100),
  },
  separtor: {
    width: widthRatio(100),
    height: heightRatio(1),
  },
});
