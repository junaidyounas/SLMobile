import InputTextView from 'components/molecules/inputText'
import GeneralPicker from 'components/organisms/generalPicker'
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack'
import HiddenPicker from 'components/organisms/hiddenPicker'
import ImageSelector from 'components/organisms/imageSelector'
import { ScrollView, View } from 'native-base'
import React from 'react'
import { Alert, StyleSheet } from 'react-native'
import { heightRatio } from 'utils/functions/pixelRatio'
import { onOpen } from 'react-native-actions-sheet-picker';
import ImagesPicker from 'components/organisms/imagesPicker'
import { AppConstants } from 'constants/appConstants'
import { permissionRequester } from 'utils/functions/permissionRequester'

type Props = {}

const SellScreen = (props: Props) => {

  return (
    <>
      <ImagesPicker
        id={AppConstants.images_picker}
        label={'Select Option'}
        onOptionSelect={undefined} />
      <ScrollView contentContainerStyle={{ paddingBottom: heightRatio(7) }} style={styles.container}>
        <GradientTopBarWithBackBtn isBack title="Create new Ad" />
        <View pt={2} />
        <ImageSelector onSelect={async () => {
          const isPermissionOk: boolean = await permissionRequester.imagesPermission();
          console.log(isPermissionOk)
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