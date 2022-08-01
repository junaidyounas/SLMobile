import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {Box, Image, Text, View} from 'native-base';
import {images} from '../../../assets/images';
import {textRatio} from 'utils/functions/textRatio';
import {fonts} from 'theme/fonts';
import LocationWithIcon from 'components/atoms/locationWithIcon';
import {SinglePostType} from 'types/posts/SinglePostType';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';
import {AppConstants} from 'constants/appConstants';

type Props = {
  item: SinglePostType;
};

const SinglePostItem = (props: Props) => {
  const {item} = props;

  const {
    title = '',
    price = '',
    image = '',
    location = '',
  } = {
    title: item.title,
    price: item.price,
    image: `${AppConstants.serverUrl}${item.images[0]}`,
    location: item?.location?.title,
  };
  return (
    <TouchableOpacity
      onPress={() => navigate(screens.SINGLEPOST, {itemId: item._id})}
      style={styles.container}>
      <Box shadow={1} borderRadius={widthRatio(4)}>
        <Image alt=" " style={styles.image} source={{uri: image}} />
        <Text noOfLines={1} style={styles.titleText}>
          {title}
        </Text>
        <Text noOfLines={1} style={styles.priceText}>
          {price}
        </Text>
        <View style={styles.locationContainer}>
          <LocationWithIcon location={location} />
        </View>
        <View pb={2} />
      </Box>
    </TouchableOpacity>
  );
};

export default SinglePostItem;

const styles = StyleSheet.create({
  container: {
    flex: 0.48,
    width: '48%',
  },
  image: {
    width: '100%',
    height: heightRatio(20),
    borderTopLeftRadius: widthRatio(4),
    borderTopRightRadius: widthRatio(4),
  },
  titleText: {
    fontSize: textRatio(14.5),
    fontFamily: fonts.poppins_medium,
    paddingHorizontal: widthRatio(2),
    paddingTop: heightRatio(0.5),
  },
  priceText: {
    paddingHorizontal: widthRatio(2),
    fontSize: textRatio(14.5),
  },
  locationContainer: {
    paddingHorizontal: widthRatio(2),
  },
});
