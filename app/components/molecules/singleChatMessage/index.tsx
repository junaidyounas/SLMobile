import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {Message} from 'types/chat/Message';

type Props = {
  item: Message;
  index: number;
};

const SingleChatMessage = (props: Props) => {
  const {index} = props;
  const wrapEven: any = index % 2 === 0 ? {flexWrap: 'wrap-reverse'} : {};
  const bgEven: any =
    index % 2 === 0
      ? {
          backgroundColor: colors.darkblue[700],
        }
      : {};
  const colorEven: any =
    index % 2 === 0
      ? {
          color: colors.white,
        }
      : {};
  return (
    <View style={[styles.container, wrapEven]}>
      <View style={[styles.chatText, bgEven]}>
        <Text style={[colorEven]}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </Text>
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
