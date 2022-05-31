import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input } from 'native-base'
import { colors } from 'theme/colors'
import SearchBar from 'components/molecules/searchBar'
import { widthRatio } from 'utils/functions/pixelRatio'

type Props = {}

const SearchBarWithLocationBar = (props: Props) => {
    return (
        <View style={styles.container}>
            <SearchBar />

        </View>
    )
}

export default SearchBarWithLocationBar

const styles = StyleSheet.create({
    container: {
        padding: widthRatio(1),
        backgroundColor: colors.primary[100]
    }
})