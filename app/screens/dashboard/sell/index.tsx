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

type Props = {}
const ImageSelectConstants = ['Select from gallery', 'Take photo from camera', 'cancel']

const SellScreen = (props: Props) => {
  const onSelectImageOption = (value: string) => {
    if (value === ImageSelectConstants[0]) {
      Alert.alert('Gallery')
    } else if (value === ImageSelectConstants[1]) {
      Alert.alert('Take Photo')
    } else if (value === ImageSelectConstants[2]) {
      Alert.alert('Cancel');
    }
  }
  return (
    <>
      <HiddenPicker
        id={'selectimage'}
        options={ImageSelectConstants}
        onOptionSelect={onSelectImageOption}
        label={'Select Option'}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: heightRatio(7) }} style={styles.container}>
        <GradientTopBarWithBackBtn isBack title="Create new Ad" />
        <View pt={2} />
        <ImageSelector onSelect={() => {
          onOpen('selectimage')
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