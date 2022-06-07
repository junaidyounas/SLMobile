import { StyleSheet } from 'react-native'
import React from 'react'
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack'
import ImageSelector from 'components/organisms/imageSelector'
import { ScrollView, Text, View } from 'native-base'
import InputTextView from 'components/molecules/inputText'
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

    </ScrollView>
  )
}

export default SellScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})