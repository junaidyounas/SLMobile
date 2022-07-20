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

type Props = {
  route?: any;
};

const ImageSingleItem = () => {
  return (
    <Image
      style={{width: widthRatio(100), height: heightRatio(50)}}
      source={images.dummy.image}
      alt=" "
    />
  );
};

const SinglePostScreen = (props: Props) => {
  const {itemId = ''} = props.route?.params;

  // states
  const [post, setPost] = useState<SinglePostType | any>();

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
      <ScrollView>
        <BackAndShareButtonHeader />
        <FlatList
          horizontal
          pagingEnabled
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={ImageSingleItem}
        />
        <PriceAndName name={post.title} price={post.price} />
        <View style={styles.content}>
          <LocationWithIcon
            color={colors.gray[100]}
            location={post.location}
            fontSize={16}
          />
          <Text style={styles.detailsText}>Details</Text>
          <DetailsTable />
        </View>
      </ScrollView>
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
});
