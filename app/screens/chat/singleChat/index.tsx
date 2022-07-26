import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'native-base';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import SingleChatMessage from 'components/molecules/singleChatMessage';
import ChatResponseBar from 'components/molecules/chatResponseBar';
import {heightRatio} from 'utils/functions/pixelRatio';
import {ChatSession} from 'types/chat/Session';
import {useIsFocused} from '@react-navigation/native';
import {chatService} from 'services/chatService';
import {Message} from 'types/chat/Message';
import {IAppState} from 'store/IAppState';
import {useSelector} from 'react-redux';

type Props = {
  route?: any;
};

const SingleChatScreen = (props: Props) => {
  const {id, senderId, receiverId} = props.route?.params;
  const user = useSelector((state: IAppState) => state.auth.user);
  const focused = useIsFocused();

  const [loading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Array<Message>>([]);

  const [response, setResponse] = useState('');

  function getSingleChatSession() {
    chatService
      .getChatMessages(id)
      .then((res: any) => {
        setMessages(res.messages.reverse());
      })
      .finally(() => {});
  }

  function sendMessage() {
    const obj = {message: response, senderId, receiverId};
    console.log(obj);
    setIsLoading(true);
    chatService
      .sendMessage(obj, id)
      .then((res: any) => {
        getSingleChatSession();
        setResponse('');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getSingleChatSession();
  }, [focused]);
  return (
    <View style={styles.container}>
      <GradientTopBarWithBackBtn title={'Chat'} isBack />
      <FlatList
        inverted
        ListHeaderComponent={() => (
          <View style={{marginTop: heightRatio(10)}} />
        )}
        data={messages}
        renderItem={({item, index}) => (
          <SingleChatMessage item={item} index={index} userId={user._id} />
        )}
      />
      <ChatResponseBar
        onSend={sendMessage}
        isLoading={loading}
        value={response}
        onChange={setResponse}
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
