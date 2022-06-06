import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, Input, View } from 'native-base'
import { colors } from 'theme/colors'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import { textRatio } from 'utils/functions/textRatio'
import { fonts } from 'theme/fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {}

const SearchBar = (props: Props) => {
    const gradientBg = {
        linearGradient: {
            colors: [colors.darkblue[800], colors.darkblue[600]],
            start: [0, 1],
            end: [1, 0],
        },
    }
    return (
        <Box bg={gradientBg} style={styles.container}>
            <Input
                style={styles.input}
                placeholder={'Search here'}
                placeholderTextColor={colors.gray[400]}
                borderWidth={0}
                bgColor={'transparent'}
                textDecorationLine={'none'} />
            {/* <Ionicons name="menu" color={colors.white} /> */}
        </Box>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],
        padding: widthRatio(1),
        borderRadius: widthRatio(3),
        height: heightRatio(6.5),
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    input: {
        fontSize: textRatio(15),
        fontFamily: fonts.poppins_regular,
        alignItems: 'center',
        height: heightRatio(5),
        color: colors.white
    }
})