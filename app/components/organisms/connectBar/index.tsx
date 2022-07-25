import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ConnectUserPicker from '../connectUserPicker';
import {SinglePostType} from 'types/posts/SinglePostType';
import {chatService} from 'services/chatService';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';
type Props = {
  data: SinglePostType;
};

const ConnectBar = (props: Props) => {
  const {data} = props;
  const createChatSession = () => {
    navigate(screens.CHATSESSIONS);
    // const obj = {
    //   postId: data._id,
    //   receiverId: data.user._id,
    //   lastMessage: 'Interested in this ad!',
    // };
    // chatService.createSession(obj).then(res => {
    //   console.log(res);
    // });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          createChatSession();
        }}
        style={styles.btnBg}>
        <FontAwesome
          name="send"
          color={colors.darkblue[600]}
          size={widthRatio(5)}
        />
      </TouchableOpacity>
      <ConnectUserPicker postData={props.data} />
    </View>
  );
};

export default ConnectBar;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(100),
    backgroundColor: colors.darkblue[700],
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btnBg: {
    width: widthRatio(10),
    height: widthRatio(10),
    margin: widthRatio(2),
    borderRadius: widthRatio(2),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
