import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, Pressable, Text} from 'native-base';
import {globalstyles} from 'theme/globalStyles';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {useIsFocused} from '@react-navigation/native';
import {categoryService} from 'services/categoryService';
import {Category} from 'types/Category';
import {onClose, onOpen, Picker} from 'react-native-actions-sheet-picker';
import {logMe} from 'utils/functions/logBinder';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from 'store/IAppState';
import {addSearchCategory} from 'store/appState/appSlice';
type Props = {};

const CategorySelector = (props: Props) => {
  const [categoryTitle, setCatTitle] = useState('');
  const [subCategories, setSubCategories] = useState<Category>();
  const [categories, setCategories] = useState<Category[]>();
  const focus = useIsFocused();

  const searchCategory = useSelector(
    (state: IAppState) => state.app.searchCategory,
  );
  const dispatch = useDispatch();

  // get all category from server
  const getAllCategories = () => {
    categoryService
      .getAll()
      .then(res => {
        setCategories(res);
        logMe(res[0]);
      })
      .catch(err => {});
  };
  useEffect(() => {
    getAllCategories();
  }, [focus]);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          onOpen('homeResultsCategory');
        }}>
        <Box
          style={[styles.btn, {marginRight: widthRatio(1)}]}
          bg={globalstyles.btnGradient}>
          <Text style={styles.text} numberOfLines={1}>
            {searchCategory?.title
              ? searchCategory?.title
              : 'Search by category'}
          </Text>
        </Box>
      </TouchableWithoutFeedback>

      {/* If sub category not exists then disable sub category button  */}
      {searchCategory?.title ? (
        <TouchableWithoutFeedback
          onPress={() => {
            onOpen('homeResultsSubCategory');
          }}>
          <Box
            style={[styles.btn, {marginLeft: widthRatio(1)}]}
            bg={globalstyles.btnGradient}>
            <Text style={styles.text} numberOfLines={1}>
              {searchCategory?.subCategory
                ? searchCategory?.subCategory
                : 'Sub Category'}
            </Text>
          </Box>
        </TouchableWithoutFeedback>
      ) : null}
      {searchCategory?.id ? (
        <Pressable
          style={{marginLeft: widthRatio(2)}}
          onPress={() => {
            dispatch(addSearchCategory({} as any));
          }}>
          <AntDesign name="closecircleo" size={widthRatio(7)} />
        </Pressable>
      ) : null}
      <Picker
        id={'homeResultsCategory'}
        data={categories || []}
        label="Please select a category"
        setSelected={() => {}}
        renderListItem={(item: Category) => {
          return (
            <Pressable
              style={{paddingVertical: heightRatio(3)}}
              onPress={() => {
                var obj: any = {};
                obj.id = item._id;
                obj.title = item.title;
                dispatch(addSearchCategory(obj));
                setSubCategories(item);
                console.log(item);
                onClose('homeResultsCategory');
              }}>
              <Text>{item.title}</Text>
            </Pressable>
          );
        }}
      />
      {/* Sub category picker */}
      <Picker
        id={'homeResultsSubCategory'}
        data={subCategories?.subCategories || []}
        label="Please select a category"
        setSelected={() => {}}
        renderListItem={(item: {title: string}) => {
          return (
            <Pressable
              style={{paddingVertical: heightRatio(3)}}
              onPress={() => {
                let obj: any = {
                  id: searchCategory.id,
                  title: searchCategory.title,
                };
                Object.assign(obj, {subCategory: item.title});
                dispatch(addSearchCategory(obj));
                onClose('homeResultsSubCategory');
              }}>
              <Text>{item.title}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default CategorySelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    flex: 1,
    paddingVertical: heightRatio(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthRatio(2),
  },
  text: {
    color: colors.white,
  },
});
