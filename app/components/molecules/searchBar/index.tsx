import { StyleSheet } from 'react-native'
import React from 'react'
import { Input, View } from 'native-base'
import { colors } from 'theme/colors'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import { textRatio } from 'utils/functions/textRatio'
import { fonts } from 'theme/fonts'

type Props = {}

const SearchBar = (props: Props) => {
    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                placeholder={'Search here'}
                placeholderTextColor={colors.gray[400]}
                borderWidth={0}
                bgColor={'transparent'}
                textDecorationLine={'none'} />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],
        padding: widthRatio(1),
        borderRadius: widthRatio(3),
        height: heightRatio(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontSize: textRatio(15),
        fontFamily: fonts.poppins_regular,
        alignItems: 'center',
        height: heightRatio(5),

    }
})