import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {Message} from 'types/chat/Message';

type Props = {
  item: Message;
  index: number;
  userId: string;
};

const SingleChatMessage = (props: Props) => {
  const {index, item, userId} = props;

  const wrapEven: any =
    userId == item.senderId || userId == item.receiverId
      ? {flexWrap: 'wrap-reverse'}
      : {};
  const bgEven: any =
    item.senderId || userId == item.receiverId
      ? {
          backgroundColor: colors.darkblue[700],
        }
      : {};
  const colorEven: any =
    item.senderId || userId == item.receiverId
      ? {
          color: colors.white,
        }
      : {};
  return (
    <View style={[styles.container, wrapEven]}>
      <View style={[styles.chatText, bgEven]}>
        <Text style={[colorEven]}>{item.message}</Text>
      </View>
    </View>
  );
};

export default SingleChatMessage;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(100),
  },
  chatText: {
    width: widthRatio(75),
    backgroundColor: colors.gray[300],
    marginTop: heightRatio(1),
    marginHorizontal: widthRatio(2),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: widthRatio(2),
    paddingHorizontal: widthRatio(2),
    borderRadius: widthRatio(2),
  },
});
