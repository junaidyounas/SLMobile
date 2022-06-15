import InputTextView from 'components/molecules/inputText'
import GeneralPicker from 'components/organisms/generalPicker'
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack'
import HiddenPicker from 'components/organisms/hiddenPicker'
import ImageSelector from 'components/organisms/imageSelector'
import { ScrollView, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { heightRatio } from 'utils/functions/pixelRatio'
import { onOpen } from 'react-native-actions-sheet-picker';
import ImagesPicker from 'components/organisms/imagesPicker'
import { AppConstants } from 'constants/appConstants'
import { permissionRequester } from 'utils/functions/permissionRequester'
import { logMe } from 'utils/functions/logBinder'
import { uploadService } from 'services/uploadService'
import { ImageDocumentBeforeUpload } from 'types/ImageDocumentBeforeUpload'
import { createFormData, createSingleFormData } from 'utils/functions/createFormData'

type Props = {}

const SellScreen = (props: Props) => {
  const [images, setImages] = useState<ImageDocumentBeforeUpload[]>([]);
  const [imgsToShow, setImgsToShow] = useState<ImageDocumentBeforeUpload[]>([]);
  useEffect(() => {
    images.forEach((item: any) => {
      const data = createSingleFormData(item);
      uploadService.uploadSingleImages(data).then(res => {
        logMe(res)
        setImgsToShow(item);
      }).catch(err => {
        logMe(err)
      })
    })
  }, [images])


  return (
    <>
      <ImagesPicker
        id={AppConstants.images_picker}
        label={'Select Option'}
        onOptionSelect={undefined}
        onSelectSuccess={setImages} />
      <ScrollView contentContainerStyle={{ paddingBottom: heightRatio(7) }} style={styles.container}>
        <GradientTopBarWithBackBtn isBack title="Create new Ad" />
        <View pt={2} />
        <ImageSelector images={images} onSelect={async () => {
          const isPermissionOk: boolean = await permissionRequester.galleryPermission();
          if (isPermissionOk) {
            onOpen(AppConstants.images_picker);
          }

        }} />
        <InputTextView marginTop={2} placeholder="Please write title" label={"Post Title"} />
        <InputTextView
          isTextView
          marginTop={2}
          placeholder="Please write description"
          label={"Post Description"} />
        <InputTextView marginTop={2} placeholder="Price" label={"Price"} />
        <GeneralPicker marginTop={2}
          label="Select Category"
          placeholder="Select Category"
          id="category" />
      </ScrollView>
    </>
  )
}

export default SellScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})