import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import BackAndShareButtonHeader from 'components/molecules/backAndShareHeader';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import SingleChatSessionItem from 'components/organisms/singleChatSessionItem';
import {colors} from 'theme/colors';
import {chatService} from 'services/chatService';
import {ChatSession} from 'types/chat/Session';
import {useIsFocused} from '@react-navigation/native';

type Props = {};

const ChatSessions = (props: Props) => {
  const focused = useIsFocused();
  const [sessions, setSessions] = useState<Array<ChatSession>>();

  function getChatSessions() {
    chatService
      .getAllCurrentUserChatSessions()
      .then((res: any) => {
        setSessions(res);
      })
      .finally(() => {});
  }

  useEffect(() => {
    getChatSessions();
  }, [focused]);

  return (
    <View style={styles.container}>
      <GradientTopBarWithBackBtn title={'Chats'} isBack />
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separtor} />}
        data={sessions}
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
