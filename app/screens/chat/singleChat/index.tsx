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
import SingleChatPostDetails from 'components/molecules/singleChatPostDetails';

type Props = {
  route?: any;
};

const SingleChatScreen = (props: Props) => {
  const {id, senderId, receiverId} = props.route?.params;
  const user = useSelector((state: IAppState) => state.auth.user);
  const focused = useIsFocused();

  const [loading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Array<Message>>([]);
  const [sessionDetails, setSessionDetails] = useState<ChatSession>();

  const [response, setResponse] = useState('');

  // pages
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);

  function getSingleChatSessionDetails() {
    chatService
      .getSingleChatSession(id)
      .then((res: any) => {
        setSessionDetails(res);
      })
      .finally(() => {});
  }

  function getSingleChatSession() {
    chatService
      .getChatMessages(id)
      .then((res: any) => {
        setMessages(res.messages);
      })
      .finally(() => {});
  }

  function moreMessages(start: number, end: number) {
    console.log(start, end);
    chatService
      .getChatMessages(id, start, end)
      .then((res: any) => {
        if (res.messages.length > 0) {
          // console.log(res.messages);
          const data: any = [...messages, ...res.messages];
          if (res.messages.length <= 19 && start == 0 && end == 20) {
            setMessages(res.messages);
          } else {
            setStart(start + 20);
            setEnd(end + 20);
            setMessages(data);
          }
        }
      })
      .finally(() => {});
  }

  function sendMessage() {
    const recId = user._id == senderId ? receiverId : senderId;
    const obj = {message: response, senderId: user._id, receiverId: recId};
    console.log(obj);
    setIsLoading(true);
    chatService
      .sendMessage(obj, id)
      .then((res: any) => {
        getSingleChatSession();
        setResponse('');
        setStart(0);
        setEnd(20);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getSingleChatSession();
    getSingleChatSessionDetails();
  }, [focused]);
  return (
    <View style={styles.container}>
      <GradientTopBarWithBackBtn title={'Chat'} isBack />
      <SingleChatPostDetails data={sessionDetails} />
      <FlatList
        inverted
        ListHeaderComponent={() => (
          <View style={{marginTop: heightRatio(10)}} />
        )}
        data={messages}
        renderItem={({item, index}) => (
          <SingleChatMessage item={item} index={index} userId={user._id} />
        )}
        onEndReachedThreshold={0.4}
        onEndReached={() => {
          moreMessages(start, end);
        }}
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
