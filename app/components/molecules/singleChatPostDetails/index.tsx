import {StyleSheet} from 'react-native';
import React from 'react';
import {ChatSession} from 'types/chat/Session';
import {widthRatio} from 'utils/functions/pixelRatio';
import {Image, Text, View} from 'native-base';
import {AppConstants} from 'constants/appConstants';
import {images} from 'assets/images';
import {fonts} from 'theme/fonts';
import {textRatio} from 'utils/functions/textRatio';
import {colors} from 'theme/colors';

type Props = {
  data: ChatSession;
};

const SingleChatPostDetails = (props: Props) => {
  const {data} = props;
  const {
    image = '',
    title = '',
    price = 0,
    sellerName = '',
  } = {
    image: data?.postId?.images[0],
    title: data?.postId?.title,
    price: data?.postId?.price,
    sellerName: data?.postId?.user?.name,
  };
  return (
    <View shadow={1} style={styles.container}>
      <View>
        <Image
          alt={' '}
          style={styles.image}
          source={{uri: AppConstants.serverUrl + image}}
          fallbackSource={images.dummy.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.price}>Price: {price}</Text>
        <Text style={styles.sellerName}>{sellerName}</Text>
      </View>
    </View>
  );
};

export default SingleChatPostDetails;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(100),
    padding: widthRatio(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: widthRatio(13),
    height: widthRatio(13),
  },
  textContainer: {
    paddingLeft: widthRatio(2),
  },
  name: {
    fontFamily: fonts.poppins_regular,
    fontSize: textRatio(14),
  },
  price: {
    fontFamily: fonts.poppins_regular,
    fontSize: textRatio(13),
    color: colors.gray[400],
  },
  sellerName: {
    fontFamily: fonts.poppins_regular,
    fontSize: textRatio(12),
    color: colors.gray[400],
  },
});
