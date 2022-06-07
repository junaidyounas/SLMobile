import InputTextView from 'components/molecules/inputText'
import GeneralPicker from 'components/organisms/generalPicker'
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack'
import ImageSelector from 'components/organisms/imageSelector'
import { ScrollView, View } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { heightRatio } from 'utils/functions/pixelRatio'

type Props = {}

const SellScreen = (props: Props) => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: heightRatio(7) }} style={styles.container}>
      <GradientTopBarWithBackBtn isBack title="Create new Ad" />
      <View pt={2} />
      <ImageSelector />
      <InputTextView marginTop={2} placeholder="Please write title" label={"Post Title"} />
      <InputTextView
        isTextView
        marginTop={2}
        placeholder="Please write description"
        label={"Post Description"} />
      <InputTextView marginTop={2} placeholder="Price" label={"Price"} />
      <GeneralPicker marginTop={2} label="Select Category" />
    </ScrollView>
  )
}

export default SellScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})