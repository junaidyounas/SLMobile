import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from 'theme/colors'
import { widthRatio } from 'utils/functions/pixelRatio'
import { fonts } from 'theme/fonts'
import { Box, Image, Text, View } from 'native-base'
import { globalstyles } from 'theme/globalStyles'
import { images } from 'assets/images'
import MiniImage from 'components/atoms/miniImage'
import MiniButton from 'components/atoms/miniButton'

type Props = {}

const ImageSelector = (props: Props) => {
    return (
        <View style={styles.container}>
            <View flexDirection="row" justifyContent="space-between" alignItems="center">
                <Text style={styles.headerTxt}>Add Images</Text>
                <MiniButton />
            </View>
            <View style={styles.imagesContainer}>
                <MiniImage />
                <MiniImage />
                <MiniImage />
                <MiniImage />
                <MiniImage />
                <MiniImage />
            </View>

        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[200],
        marginHorizontal: widthRatio(3),
        borderRadius: widthRatio(3),
        padding: widthRatio(3)
    },
    headerTxt: {
        fontFamily: fonts.poppins_semi_bold,
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: widthRatio(3)
    },

})