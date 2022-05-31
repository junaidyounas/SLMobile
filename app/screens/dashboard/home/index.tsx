import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from 'theme/colors'
import SearchBarWithLocationBar from 'components/organisms/searchBarWithLocationBar'

type Props = {}

const HomeScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <SearchBarWithLocationBar />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})