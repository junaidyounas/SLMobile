import { StyleSheet } from 'react-native'
import React from 'react'
import { colors } from 'theme/colors'
import SearchBarWithLocationBar from 'components/organisms/searchBarWithLocationBar'
import SearchBarWithMenuIcon from 'components/organisms/searchBarWithMenuIcon'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import { FlatList, View } from 'native-base'
import SinglePostItem from 'components/organisms/singlePostItem'
import LocationWithIcon from 'components/atoms/locationWithIcon'

type Props = {}

const HomeScreen = (props: Props) => {
    return (
        <>
            <View style={styles.locAndsearchContainer}>
                <LocationWithIcon fontSize={16} />
                <SearchBarWithMenuIcon />
            </View>
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

export default HomeScreen

const styles = StyleSheet.create({
    locAndsearchContainer: {
        paddingTop: heightRatio(1),
        paddingBottom: heightRatio(0.5),
        paddingHorizontal: widthRatio(3)
    },
    container: {
        flex: 1,
        paddingHorizontal: widthRatio(3),
    },
    row: {
        justifyContent: 'space-between',
        paddingBottom: heightRatio(2)
    }
})