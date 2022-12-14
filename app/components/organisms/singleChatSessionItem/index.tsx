import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Image, Pressable, Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {fonts} from 'theme/fonts';
import {textRatio} from 'utils/functions/textRatio';
import {globalstyles} from 'theme/globalStyles';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {images} from 'assets/images';
import {ChatSession} from 'types/chat/Session';
import {AppConstants} from 'constants/appConstants';
import {timeDateFormat, timeFormat} from 'utils/functions/timeDateFormat';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';

type Props = {
  item: ChatSession;
};

const SingleChatSessionItem = (props: Props) => {
  const {item} = props;

  const {
    _id = '',
    postTitle = '',
    price = 0,
    image = '',
    updatedAt = new Date(),
    senderId = '',
    receiverId = '',
  } = {
    _id: item._id,
    postTitle: item.postId?.title,
    price: item.postId?.price,
    image: item.postId?.images[0],
    updatedAt: item.updatedAt,
    senderId: item.senderId,
    receiverId: item.receiverId,
  };
  return (
    <Pressable
      onPress={() => {
        navigate(screens.SINGLECHAT, {id: _id, senderId, receiverId});
      }}
      style={styles.container}>
      <View style={styles.image}>
        <Image
          alt=" "
          fallbackSource={images.dummy.image}
          ignoreFallback={false}
          style={styles.imageCircle}
          source={{uri: `${AppConstants.serverUrl}${image}`}}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.nameTimeContainer}>
          <Text>{postTitle}</Text>
          <Text style={globalstyles.text.time}>
            {timeDateFormat(updatedAt.toString())}
          </Text>
        </View>
        <Text style={styles.lastMessage}>{price}</Text>
      </View>
    </Pressable>
  );
};

export default SingleChatSessionItem;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(100),
    paddingHorizontal: widthRatio(3),
    paddingVertical: heightRatio(1),
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: colors.gray[400],
  },
  image: {
    width: widthRatio(15),
    height: widthRatio(15),
    borderRadius: widthRatio(7.5),
    borderWidth: 0.3,
    borderColor: colors.gray[400],
  },
  imageCircle: {
    width: widthRatio(15),
    height: widthRatio(15),
    borderRadius: widthRatio(7.5),
  },
  textContainer: {
    paddingLeft: widthRatio(2),
    justifyContent: 'center',
    flex: 1,
  },
  nameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lastMessage: {
    color: colors.gray[400],
    fontSize: textRatio(14),
  },
});
