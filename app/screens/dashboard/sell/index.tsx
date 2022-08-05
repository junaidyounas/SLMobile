import InputTextView from 'components/molecules/inputText';
import GeneralPicker from 'components/organisms/generalPicker';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import HiddenPicker from 'components/organisms/hiddenPicker';
import ImageSelector from 'components/organisms/imageSelector';
import {ScrollView, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {heightRatio} from 'utils/functions/pixelRatio';
import {onOpen} from 'react-native-actions-sheet-picker';
import ImagesPicker from 'components/organisms/imagesPicker';
import {AppConstants} from 'constants/appConstants';
import {permissionRequester} from 'utils/functions/permissionRequester';
import {logMe} from 'utils/functions/logBinder';
import {uploadService} from 'services/uploadService';
import {ImageDocumentBeforeUpload} from 'types/ImageDocumentBeforeUpload';
import {
  createFormData,
  createSingleFormData,
} from 'utils/functions/createFormData';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ButtonComponent from 'components/base/button';
import {Category, SubCategory} from 'types/Category';
import {categoryService} from 'services/categoryService';
import {postService} from 'services/postService';
import {CreatePostType} from 'types/posts/CreatePostType';
import ConditionTabs from 'components/molecules/conditionTabs';
import {CONDITIONS} from 'enum/Conditions';
import LocationSelector from 'components/organisms/locationSelector';
import {useSelector} from 'react-redux';
import {IAppState} from 'store/IAppState';
import EmptyStateScreen from 'components/molecules/emptyStateScreen';
import {goBack} from 'navigations/navRef';
import BrandChooser from 'components/molecules/brandChooser';
import {MobileBrands} from 'data/mobileBrands';
import MobileConditionTabs from 'components/molecules/mobileConditionType';
import LabelText from 'components/atoms/labelText';
import {carMake} from 'data/carMake';

const AddPostSchema = Yup.object({
  title: Yup.string().required('title is required'),
  description: Yup.string().required('Description Required'),
  price: Yup.number().required('Price required'),
  category: Yup.string().required('Category Required'),
  brand: Yup.string().optional(),
  make: Yup.string().optional(),
});

type Props = {};

const SellScreen = (props: Props) => {
  const formikRef = useRef<any>();
  const user = useSelector((state: IAppState) => state.auth.user);

  const addLocation = useSelector(
    (state: IAppState) => state.app.addPostLocation,
  );

  const [images, setImages] = useState<ImageDocumentBeforeUpload[]>([]);
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
    if (!addLocation.title) {
      Alert.alert('Please select location');
      return;
    }
    setIsLoading(true);
    postService
      .createNewPost(obj)
      .then(res => {
        logMe(res);
        formikRef.current.resetForm();
        goBack();
      })
      .catch(err => {
        logMe(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    uploadImages();
  }, [images]);

  useEffect(() => {
    getAllCategories();
  }, []);

  if (user.token) {
    return (
      <>
        <ImagesPicker
          id={AppConstants.images_picker}
          label={'Select Option'}
          onOptionSelect={undefined}
          onSelectSuccess={setImages}
        />
        <ScrollView
          contentContainerStyle={{paddingBottom: heightRatio(7)}}
          style={styles.container}>
          <GradientTopBarWithBackBtn isBack title="Create new Ad" />
          <View pt={2} />
          <ImageSelector
            images={images}
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
              brand: '',
              make: '',
            }}
            onSubmit={values => {
              logMe('On Formik Submit sell');
              const obj: CreatePostType = {
                title: values.title,
                description: values.description,
                price: parseInt(values.price),
                condition: selectedCondition,
                location: addLocation,
                category: values.category,
                subCategory: values.subCategory,
                images: imgsForServer.filter(img => img !== null),
                brand: values.brand,
                make: values.make,
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
                <View pb={2} />
                <LocationSelector isLabel={true} />
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

                {selectedCategoryName == 'Mobiles' ? (
                  <>
                    <View pt={4} />
                    <LabelText marginLeft={3} label={'Condition'} />
                    <MobileConditionTabs
                      onChange={setCondition}
                      selectedTab={selectedCondition}
                    />
                  </>
                ) : null}

                <GeneralPicker
                  marginTop={2}
                  label="Select Category"
                  placeholder="Select Category"
                  id="category"
                  setValue={(e: Category) => {
                    setFieldValue('category', e._id);
                    setCategoryName(e.title);
                    setSubCategories(e);
                    setFieldValue('subCategory', '');
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

                {values.subCategory == 'Mobile Phones' ? (
                  <BrandChooser
                    marginHorizontal={1.5}
                    id={AppConstants.pickerIds.mobileBrand}
                    marginTop={2}
                    data={MobileBrands}
                    placeholder="Select Brand"
                    setValue={(e: any) => {
                      setFieldValue('brand', e.title);
                    }}
                    value={values.brand}
                  />
                ) : null}

                {/* For vehicles */}
                {values.subCategory === 'Cars' ||
                values.subCategory === 'Cars Accessories' ? (
                  <BrandChooser
                    marginHorizontal={1.5}
                    id={AppConstants.pickerIds.carMake}
                    marginTop={2}
                    data={carMake}
                    placeholder="Make"
                    setValue={(e: any) => {
                      setFieldValue('make', e.title);
                    }}
                    value={values.make}
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
  } else {
    return (
      <>
        <GradientTopBarWithBackBtn isBack title="Create new Ad" />
        <EmptyStateScreen text="Login to post new ad" />
      </>
    );
  }
};

export default SellScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
