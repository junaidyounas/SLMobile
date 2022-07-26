import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Image, Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {fonts} from 'theme/fonts';
import {textRatio} from 'utils/functions/textRatio';
import {globalstyles} from 'theme/globalStyles';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {images} from 'assets/images';

type Props = {};

const SingleChatSessionItem = (props: Props) => {
  return (
    <Box style={styles.container}>
      <View style={styles.image}>
        <Image
          alt=" "
          fallbackSource={images.dummy.image}
          ignoreFallback={false}
          style={styles.imageCircle}
          source={images.dummy.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.nameTimeContainer}>
          <Text>Junaid Younas</Text>
          <Text style={globalstyles.text.time}>5:30PM</Text>
        </View>
        <Text style={styles.lastMessage}>Hi i want this product</Text>
      </View>
    </Box>
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
