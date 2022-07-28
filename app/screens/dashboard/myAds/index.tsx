import EmptyStateScreen from 'components/molecules/emptyStateScreen';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import MyAdsSingleItem from 'components/organisms/myAdsSingleItem';
import {FlatList, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {RefreshControl, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {postService} from 'services/postService';
import {IAppState} from 'store/IAppState';
import {SinglePostType} from 'types/posts/SinglePostType';
import {logMe} from 'utils/functions/logBinder';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';

type Props = {};

const MyAdsScreen = (props: Props) => {
  const user = useSelector((state: IAppState) => state.auth.user);
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
      .then((res: any) => {
        if (res.statusCode == 401) {
        } else {
          setPosts(res);
        }
        logMe(res.statusCode);
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
      {!user.token ? (
        <EmptyStateScreen text="Login to see your ads" />
      ) : (
        <View style={styles.container}>
          <View pt={2} />
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2} // set number of columns
            columnWrapperStyle={styles.row} // space them out evenly
            ListFooterComponent={() => <View pb={10} />}
            data={posts}
            renderItem={MyAdsSingleItem}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      )}
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
