import {StyleSheet} from 'react-native';
import React from 'react';
import {FlatList, Text, View} from 'native-base';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import SingleChatMessage from 'components/molecules/singleChatMessage';
import ChatResponseBar from 'components/molecules/chatResponseBar';
import {heightRatio} from 'utils/functions/pixelRatio';

type Props = {};

const SingleChatScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <GradientTopBarWithBackBtn title={'Chat'} isBack />
      <FlatList
        inverted
        ListHeaderComponent={() => (
          <View style={{marginTop: heightRatio(10)}} />
        )}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
        renderItem={SingleChatMessage}
      />
      <ChatResponseBar
        onSend={undefined}
        isLoading={false}
        value={''}
        onChange={undefined}
      />
    </View>
  );
};

export default SingleChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
