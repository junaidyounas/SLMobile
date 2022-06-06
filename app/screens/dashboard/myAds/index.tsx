import { StyleSheet } from 'react-native'
import React from 'react'
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack'
import { FlatList, View } from 'native-base'
import SinglePostItem from 'components/organisms/singlePostItem'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'

type Props = {}

const MyAdsScreen = (props: Props) => {
  return (
    <>
      <GradientTopBarWithBackBtn title={'My Ads'} isBack />
      <View style={styles.container}>
        <View pt={2} />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}                  // set number of columns 
          columnWrapperStyle={styles.row}  // space them out evenly
          ListFooterComponent={() => <View pb={10} />}
          data={[1, 2, 3, 4, 5, 6]} renderItem={SinglePostItem} />
      </View>
    </>
  )
}

export default MyAdsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthRatio(3)
  },
  row: {
    justifyContent: 'space-between',
    paddingBottom: heightRatio(2)
  }
})