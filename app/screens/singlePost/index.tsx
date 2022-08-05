import {StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, FlatList, Image, ScrollView, View} from 'native-base';
import {globalstyles} from 'theme/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'theme/colors';
import {textRatio} from 'utils/functions/textRatio';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import BackAndShareButtonHeader from 'components/molecules/backAndShareHeader';
import {images} from 'assets/images';
import {fonts} from 'theme/fonts';
import PriceAndName from 'components/molecules/priceAndName';
import LocationWithIcon from 'components/atoms/locationWithIcon';
import DetailsTable from 'components/organisms/detailsTable';
import {postService} from 'services/postService';
import {SinglePostType} from 'types/posts/SinglePostType';
import {logMe} from 'utils/functions/logBinder';
import {AppConstants} from 'constants/appConstants';
import ConnectBar from 'components/organisms/connectBar';
import {useSelector} from 'react-redux';
import {IAppState} from 'store/IAppState';

type Props = {
  route?: any;
};

const ImageSingleItem = ({item}: {item: string}) => {
  return (
    <Image
      style={{width: widthRatio(100), height: heightRatio(50)}}
      source={{uri: AppConstants.serverUrl + item}}
      alt=" "
    />
  );
};

const SinglePostScreen = (props: Props) => {
  const {itemId = ''} = props.route?.params;

  // states
  const [post, setPost] = useState<Partial<SinglePostType>>({});

  function getSinglePostById(itemId: string) {
    postService
      .getSinglePostById(itemId)
      .then(res => {
        setPost(res);
        logMe(res);
      })
      .finally(() => {});
  }
  useEffect(() => {
    logMe(itemId);
    getSinglePostById(itemId);
  }, [itemId]);

  return (
    <Box style={styles.container} bg={globalstyles.btnGradient}>
      <BackAndShareButtonHeader />
      <ScrollView>
        <FlatList
          horizontal
          pagingEnabled
          data={post.images}
          renderItem={ImageSingleItem}
        />
        <PriceAndName name={post.title} price={post.price} />
        <View style={styles.content}>
          <LocationWithIcon
            color={colors.gray[100]}
            location={post.location?.title}
            fontSize={16}
          />

          <Text style={styles.detailsText}>Details</Text>
          <DetailsTable condition={post.category?.title} title="Category" />
          <DetailsTable condition={post.subCategory} title="Sub Category" />
          <DetailsTable condition={post.condition} title="Condition" />
          <DetailsTable condition={post?.user?.name} title="Posted by" />
          {post?.brand ? (
            <DetailsTable condition={post?.brand} title="Brand" />
          ) : null}
          {post?.make ? (
            <DetailsTable condition={post?.make} title="Make" />
          ) : null}
          {post?.year ? (
            <DetailsTable condition={post?.year} title="Year" />
          ) : null}
          {post?.landType ? (
            <DetailsTable condition={post?.landType} title="Land Type" />
          ) : null}
          {post?.areaUnit ? (
            <DetailsTable condition={post?.areaUnit} title="Area Unit" />
          ) : null}
          {post?.area ? (
            <DetailsTable condition={String(post?.area)} title="Area" />
          ) : null}

          {/* Description */}
          <Text style={styles.detailsText}>Description</Text>
          <Text style={styles.descriptionText}>{post.description}</Text>
          <View style={{paddingBottom: heightRatio(7)}} />
        </View>
      </ScrollView>
      <ConnectBar data={post as any} />
    </Box>
  );
};

export default SinglePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: widthRatio(3),
  },
  detailsText: {
    color: colors.gray[100],
    fontFamily: fonts.poppins_semi_bold,
    marginTop: heightRatio(3),
  },
  descriptionText: {
    color: colors.gray[100],
    fontFamily: fonts.poppins_light,
  },
});
