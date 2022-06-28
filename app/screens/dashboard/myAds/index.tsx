import {RefreshControl, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import {FlatList, View} from 'native-base';
import SinglePostItem from 'components/organisms/singlePostItem';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {SinglePostType} from 'types/posts/SinglePostType';
import {postService} from 'services/postService';
import {logMe} from 'utils/functions/logBinder';

type Props = {};

const MyAdsScreen = (props: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState<Array<SinglePostType>>([]);
  const onRefresh = React.useCallback(() => {
    getAllPosts();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  function getAllPosts() {
    postService
      .getAllMyPosts()
      .then(res => {
        logMe(res);
        // setPosts(res);
      })
      .catch(err => {});
  }

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      <GradientTopBarWithBackBtn title={'My Ads'} isBack />
      <View style={styles.container}>
        <View pt={2} />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2} // set number of columns
          columnWrapperStyle={styles.row} // space them out evenly
          ListFooterComponent={() => <View pb={10} />}
          data={posts}
          renderItem={SinglePostItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </>
  );
};

export default MyAdsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthRatio(3),
  },
  row: {
    justifyContent: 'space-between',
    paddingBottom: heightRatio(2),
  },
});
