import LocationWithIcon from 'components/atoms/locationWithIcon';
import SearchBarWithMenuIcon from 'components/organisms/searchBarWithMenuIcon';
import SinglePostItem from 'components/organisms/singlePostItem';
import {FlatList, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {RefreshControl, StyleSheet, TouchableOpacity} from 'react-native';
import {postService} from 'services/postService';
import {fonts} from 'theme/fonts';
import {SinglePostType} from 'types/posts/SinglePostType';
import {logMe} from 'utils/functions/logBinder';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';

type Props = {};

const HomeScreen = (props: Props) => {
  const [posts, setPosts] = useState<Array<SinglePostType>>([]);
  const [currentPage, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    getAllPosts(1);
    setPage(1);
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  function getAllPosts(page: number = 1, search: string = '') {
    logMe(page);
    postService
      .showAllPosts(page, search)
      .then(res => {
        if (res.length > 0 && page > 1) {
          const data: any = [...posts, ...res];
          setPosts(data);
          setPage(page);
        } else if (page == 1) {
          setPosts(res);
        }
      })
      .catch(err => {
        logMe(err);
      });
  }

  useEffect(() => {
    getAllPosts(currentPage);
  }, [currentPage]);

  // getAllPosts(currentPage, search);
  useEffect(() => {
    logMe(search);
  }, [search]);

  return (
    <>
      <View style={styles.locAndsearchContainer}>
        <TouchableOpacity>
          <Text style={styles.yourLocText}>Your Location</Text>
          <LocationWithIcon location="Islamabad" fontSize={16} />
        </TouchableOpacity>
        <SearchBarWithMenuIcon
          setQuery={setSearch}
          onSearchIconPress={() => {
            getAllPosts(1, search);
          }}
        />
      </View>
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
          onEndReachedThreshold={0.4}
          onEndReached={() => {
            setPage(currentPage + 1);
          }}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  locAndsearchContainer: {
    paddingTop: heightRatio(1),
    paddingBottom: heightRatio(0.5),
    paddingHorizontal: widthRatio(3),
  },
  yourLocText: {
    fontSize: textRatio(15),
    fontFamily: fonts.poppins_semi_bold,
  },
  container: {
    flex: 1,
    paddingHorizontal: widthRatio(3),
  },
  row: {
    justifyContent: 'space-between',
    paddingBottom: heightRatio(2),
  },
});
