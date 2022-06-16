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

const AddPostSchema = Yup.object({
  title: Yup.string().required('title is required'),
  description: Yup.string().required('Description Required'),
  price: Yup.number().required('Price required'),
  category: Yup.string().required('Category Required'),
});

type Props = {};

const SellScreen = (props: Props) => {
  const formikRef = useRef<any>();

  const [images, setImages] = useState<ImageDocumentBeforeUpload[]>([]);

  const [imgsForServer, setImgsForServer] = useState<string[]>([]);

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

  useEffect(() => {
    uploadImages();
  }, [images]);

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
          }}
          onSubmit={() => {
            logMe('On Formik Submit sell');
          }}
          validationSchema={AddPostSchema}>
          {({
            handleChange,
            setFieldValue,
            errors,
            values,
            touched,
            setFieldTouched,
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
              <GeneralPicker
                marginTop={2}
                label="Select Category"
                placeholder="Select Category"
                id="category"
              />
              <View style={{paddingTop: heightRatio(2)}} />
              <ButtonComponent title="Submit" onPress={undefined} />
            </>
          )}
        </Formik>
      </ScrollView>
    </>
  );
};

export default SellScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
