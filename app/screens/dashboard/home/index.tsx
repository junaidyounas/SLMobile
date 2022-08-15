import {useIsFocused} from '@react-navigation/native';
import LocationWithIcon from 'components/atoms/locationWithIcon';
import CategorySelector from 'components/organisms/categorySelector';
import SearchBarWithMenuIcon from 'components/organisms/searchBarWithMenuIcon';
import SinglePostItem from 'components/organisms/singlePostItem';
import {FlatList, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {RefreshControl, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {postService} from 'services/postService';
import {addFav} from 'store/auth/authSlice';
import {IAppState} from 'store/IAppState';
import {fonts} from 'theme/fonts';
import {SinglePostType} from 'types/posts/SinglePostType';
import {logMe} from 'utils/functions/logBinder';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';

type Props = {};

const HomeScreen = (props: Props) => {
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const [posts, setPosts] = useState<Array<SinglePostType>>([]);
  const [currentPage, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const user = useSelector((state: IAppState) => state.auth.user);

  const searchLocation = useSelector(
    (state: IAppState) => state.app.searchLocation,
  );
  const searchCategory = useSelector(
    (state: IAppState) => state.app.searchCategory,
  );

  const pricegt = useSelector((state: IAppState) => state.app.pricegt);
  const pricelt = useSelector((state: IAppState) => state.app.pricelt);
  const searchBrand = useSelector((state: IAppState) => state.app.searchBrand);
  const appState = useSelector((state: IAppState) => state.app);

  const onRefresh = React.useCallback(() => {
    setPage(1);
    setRefreshing(true);
    setTimeout(() => {
      setSearch('');
      setRefreshing(false);
    }, 2000);
  }, []);

  function getAllPosts(page: number = 1) {
    postService
      .showAllPosts(
        page,
        search,
        searchCategory?.id,
        searchCategory?.subCategory,
        searchLocation,
        pricegt,
        pricelt,
        searchBrand,
        appState.year,
        '',
        '',
        undefined,
        appState.isFurnished,
        appState.rooms,
        appState.bathrooms,
        appState.kitchens,
        appState.make,
      )
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

  async function getAllPostIds() {
    const data: any = await postService.getAllFavPostsIds();
    await dispatch(addFav(data));
  }

  useEffect(() => {
    getAllPostIds();
  }, [focused]);

  useEffect(() => {
    getAllPosts(currentPage);
  }, [currentPage]);
  useEffect(() => {
    setPage(1);
    getAllPosts(1);
  }, [searchCategory, searchLocation, pricegt, pricelt, searchBrand, appState]);

  return (
    <>
      <View style={styles.locAndsearchContainer}>
        {/* <TouchableOpacity>
          <Text style={styles.yourLocText}>Your Location</Text>
          <LocationWithIcon
            location={
              searchLocation?.title ? searchLocation?.title : 'Set Location'
            }
            fontSize={16}
          />
        </TouchableOpacity> */}
        <SearchBarWithMenuIcon
          setQuery={setSearch}
          onSearchIconPress={() => {
            setPage(1);
          }}
        />
        {/* <CategorySelector
          category={selectedCategoryId}
          setCategory={setSelectedCategoryId}
          selectedSubCat={selectedSubCat}
          setSelectedSubCat={setSelectedSubCat}
        /> */}
      </View>
      <View style={styles.container}>
        <View pt={2} />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2} // set number of columns
          columnWrapperStyle={styles.row} // space them out evenly
          ListFooterComponent={() => <View pb={10} />}
          data={posts}
          renderItem={({item}) => (
            <SinglePostItem favourites={user.favourites} item={item} />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReachedThreshold={0.2}
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
