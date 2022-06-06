import { StyleSheet } from 'react-native'
import React from 'react'
import { Input, View } from 'native-base'
import { colors } from 'theme/colors'
import SearchBar from 'components/molecules/searchBar'
import { widthRatio } from 'utils/functions/pixelRatio'
import MenuIcon from 'components/atoms/menuIcon'

type Props = {}

const SearchBarWithMenuIcon = (props: Props) => {
    return (
        <View style={styles.container}>
            <SearchBar />
            <View pl={2} />
            <MenuIcon />
        </View>
    )
}

export default SearchBarWithMenuIcon

const styles = StyleSheet.create({
    container: {
        padding: widthRatio(1),
        backgroundColor: colors.primary[100],
        flexDirection: 'row',
        alignItems: 'center'
    }
})