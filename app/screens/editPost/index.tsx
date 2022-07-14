import ButtonComponent from 'components/base/button';
import ConditionTabs from 'components/molecules/conditionTabs';
import InputTextView from 'components/molecules/inputText';
import GeneralPicker from 'components/organisms/generalPicker';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import ImageSelector from 'components/organisms/imageSelector';
import ImagesPicker from 'components/organisms/imagesPicker';
import {AppConstants} from 'constants/appConstants';
import {CONDITIONS} from 'enum/Conditions';
import {Formik} from 'formik';
import {ScrollView, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {onOpen} from 'react-native-actions-sheet-picker';
import {categoryService} from 'services/categoryService';
import {postService} from 'services/postService';
import {uploadService} from 'services/uploadService';
import {Category} from 'types/Category';
import {ImageDocumentBeforeUpload} from 'types/ImageDocumentBeforeUpload';
import {CreatePostType} from 'types/posts/CreatePostType';
import {createSingleFormData} from 'utils/functions/createFormData';
import {logMe} from 'utils/functions/logBinder';
import {permissionRequester} from 'utils/functions/permissionRequester';
import {heightRatio} from 'utils/functions/pixelRatio';
import * as Yup from 'yup';

const AddPostSchema = Yup.object({
  title: Yup.string().required('title is required'),
  description: Yup.string().required('Description Required'),
  price: Yup.number().required('Price required'),
  category: Yup.string().required('Category Required'),
});

type Props = {
  route?: any;
};

const EditPostScreen = (props: Props) => {
  const formikRef = useRef<any>();
  const {itemId} = props.route?.params;

  const [images, setImages] = useState<ImageDocumentBeforeUpload[] | string[]>(
    [],
  );
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Category>();

  const [imgsForServer, setImgsForServer] = useState<string[]>([]);
  const [selectedCondition, setCondition] = useState(CONDITIONS.NEW);

  const [selectedCategoryName, setCategoryName] = useState('');
  const [nestedCategories, setNestedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImages = () => {
    var arr: string[] = [];
    images.forEach((item: any) => {
      const data = createSingleFormData(item);
      uploadService
        .uploadSingleImages(data)
        .then(res => {
          logMe('=======>', res);
          arr.push(res);
        })
        .catch(err => {
          logMe(err);
          arr = [];
        });
    });
    setImgsForServer(arr);
  };

  // get all category from server
  const getAllCategories = () => {
    categoryService
      .getAll()
      .then(res => {
        setCategories(res);
      })
      .catch(err => {});
  };

  // create new ad
  function createNewAdToServer(obj: CreatePostType) {
    if (obj.images.length === 0) {
      Alert.alert('Please select image again.');
      return;
    }
    setIsLoading(true);
    postService
      .patchExistingPost(obj, itemId)
      .then(res => {
        logMe(res);
      })
      .catch(err => {
        logMe(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // useEffect(() => {
  //   uploadImages();
  // }, [images]);

  useEffect(() => {
    getAllCategories();
  }, []);

  function getPostById(id: string) {
    postService
      .getSinglePostById(id)
      .then(res => {
        console.log(res);
        // setSinglePostData(res);
        const imgs: any = res.images.map(item => {
          return {uri: `http://192.168.1.251:3000/${item}`};
        });
        setImgsForServer(res.images);
        setImages(imgs);
        formikRef.current.setFieldValue('title', res.title);
        formikRef.current.setFieldValue('description', res.description);
        formikRef.current.setFieldValue('price', res.price.toString());
        formikRef.current.setFieldValue('category', res.category._id);
        setCategoryName(res.category.title);
        const subCategories = categories.find(
          item => item._id === res.category._id,
        );
        console.log(subCategories);
        setSubCategories(subCategories);
        formikRef.current.setFieldValue('subCategory', res.subCategory);
        setCondition(res.condition as any);
        console.log(imgs);
      })
      .catch(err => {});
  }

  useEffect(() => {
    console.log(itemId);
    getPostById(itemId);
  }, [itemId]);

  return (
    <>
      <ImagesPicker
        id={AppConstants.images_picker}
        label={'Select Option'}
        onOptionSelect={undefined}
        onSelectSuccess={(value: any) => {
          uploadImages(value);
          setImages(value);
        }}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: heightRatio(7)}}
        style={styles.container}>
        <GradientTopBarWithBackBtn isBack title="Create new Ad" />
        <View pt={2} />
        <ImageSelector
          images={images as any}
          onSelect={async () => {
            const isPermissionOk: boolean =
              await permissionRequester.galleryPermission();
            if (isPermissionOk) {
              onOpen(AppConstants.images_picker);
            }
          }}
        />
        <Formik
          innerRef={formikRef}
          initialValues={{
            title: '',
            description: '',
            price: '',
            category: '',
            subCategory: '',
          }}
          onSubmit={values => {
            logMe('On Formik Submit sell');
            const obj: CreatePostType = {
              title: values.title,
              description: values.description,
              price: parseInt(values.price),
              condition: selectedCondition,
              location: 'Lahore, Pakistan',
              category: values.category,
              subCategory: values.subCategory,
              images: imgsForServer.filter(img => img !== null),
            };
            logMe(obj);
            createNewAdToServer(obj);
          }}
          validationSchema={AddPostSchema}>
          {({
            handleChange,
            setFieldValue,
            errors,
            values,
            touched,
            setFieldTouched,
            handleSubmit,
          }) => (
            <>
              <InputTextView
                value={values.title}
                onChange={handleChange('title')}
                error={touched.title ? errors.title : ''}
                marginTop={2}
                onBlur={() => setFieldTouched('title')}
                placeholder="Please write title"
                label={'Post Title'}
              />
              <InputTextView
                value={values.description}
                onChange={handleChange('description')}
                error={touched.description ? errors.description : ''}
                isTextView
                marginTop={2}
                onBlur={() => setFieldTouched('description')}
                placeholder="Please write description"
                label={'Post Description'}
              />
              <InputTextView
                value={values.price}
                onChange={handleChange('price')}
                error={touched.price ? errors.price : ''}
                marginTop={2}
                onBlur={() => setFieldTouched('price')}
                placeholder="Price"
                label={'Price'}
                keyboardType="numeric"
              />
              <View pt={4} />
              <ConditionTabs
                onChange={setCondition}
                selectedTab={selectedCondition}
              />
              <GeneralPicker
                marginTop={2}
                label="Select Category"
                placeholder="Select Category"
                id="category"
                setValue={(e: Category) => {
                  setFieldValue('category', e._id);
                  setCategoryName(e.title);
                  setSubCategories(e);
                }}
                value={selectedCategoryName}
                data={categories}
                error={errors.category}
              />

              {subCategories ? (
                <GeneralPicker
                  marginTop={2}
                  placeholder="Select Sub Category"
                  id="sub_category"
                  setValue={(e: any) => {
                    setFieldValue('subCategory', e.title);
                    setNestedCategories(e);
                  }}
                  value={values.subCategory}
                  data={subCategories?.subCategories}
                  error={errors.subCategory}
                />
              ) : null}
              <View style={{paddingTop: heightRatio(2)}} />
              <ButtonComponent
                isLoading={isLoading}
                title="Submit"
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </>
  );
};

export default EditPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
