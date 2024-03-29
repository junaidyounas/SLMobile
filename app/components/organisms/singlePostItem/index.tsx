import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {Box, Image, Pressable, Text, View} from 'native-base';
import {images} from '../../../assets/images';
import {textRatio} from 'utils/functions/textRatio';
import {fonts} from 'theme/fonts';
import LocationWithIcon from 'components/atoms/locationWithIcon';
import {SinglePostType} from 'types/posts/SinglePostType';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';
import {AppConstants} from 'constants/appConstants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from 'store/IAppState';
import {postService} from 'services/postService';
import {currentLikedPost} from 'store/appState/appSlice';

type Props = {
  item: SinglePostType;
  favourites?: any;
  deleteOne?: any;
};

const SinglePostItem = (props: Props) => {
  const {item, favourites, deleteOne} = props;
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(favourites[item._id] == true);

  const appStateLikedPost = useSelector(
    (state: IAppState) => state.app.currentLikedPost,
  );
  // console.log(Object.entries(favourites));
  // Object.entries(favourites).find(([key, value]) => {
  //   if (key == item._id) {
  //     return key == item._id;
  //   }
  // });

  useEffect(() => {
    // console.log('keys', Object.keys(appStateLikedPost)[0]);
    if (item._id == Object.keys(appStateLikedPost)[0]) {
      setIsFav(appStateLikedPost[item._id] as any);
    }
  }, [appStateLikedPost]);

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

  async function makePostFav() {
    console.log({item: item._id, isFav: !isFav});
    const p: any = {};
    p[item._id] = !isFav;
    await dispatch(currentLikedPost(p));
    await postService.makeFavPost(item._id, !isFav).then(res => {
      // console.log(res);
    });
  }
  return (
    <TouchableOpacity
      onPress={() => navigate(screens.SINGLEPOST, {itemId: item._id})}
      style={styles.container}>
      <Box shadow={1} borderRadius={widthRatio(4)}>
        <Image alt=" " style={styles.image} source={{uri: image}} />
        <View style={styles.titleAndFav}>
          <Text noOfLines={1} style={styles.titleText}>
            {title}
          </Text>
          <Pressable
            onPress={() => {
              setIsFav(!isFav);
              deleteOne && !isFav == false ? deleteOne(item._id) : null;
              makePostFav();
            }}>
            <MaterialIcons
              name={isFav ? 'favorite' : 'favorite-border'}
              size={textRatio(15)}
            />
          </Pressable>
        </View>
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
    width: widthRatio(48),
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
    width: widthRatio(40),
  },
  priceText: {
    paddingHorizontal: widthRatio(2),
    fontSize: textRatio(14.5),
  },
  locationContainer: {
    paddingHorizontal: widthRatio(2),
  },
  titleAndFav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: widthRatio(2),
    width: widthRatio(46),
  },
});
