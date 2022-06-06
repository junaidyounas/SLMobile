import { StyleSheet } from 'react-native'
import React from 'react'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import { colors } from 'theme/colors'
import { Box, Image, Text, View } from 'native-base'
import { images } from '../../../assets/images'
import { textRatio } from 'utils/functions/textRatio'
import { fonts } from 'theme/fonts'
import LocationWithIcon from 'components/atoms/locationWithIcon'

type Props = {}

const SinglePostItem = (props: Props) => {
    return (
        <Box borderRadius={widthRatio(4)} style={styles.container}>
            <Image alt=" " style={styles.image} source={images.dummy.image} />
            <Text noOfLines={1} style={styles.titleText}>Naran Kaqan Tour</Text>
            <Text noOfLines={1} style={styles.priceText}>Rs. 15000</Text>
            <View style={styles.locationContainer}>
                <LocationWithIcon />
            </View>
            <View pb={2} />
        </Box>
    )
}

export default SinglePostItem

const styles = StyleSheet.create({
    container: {
        flex: 0.48,
        borderWidth: 1,
        borderColor: colors.gray[300],
        width: '48%',
    },
    image: {
        width: '100%',
        height: heightRatio(20),
        borderTopLeftRadius: widthRatio(4),
        borderTopRightRadius: widthRatio(4)
    },
    titleText: {
        fontSize: textRatio(14.5),
        fontFamily: fonts.poppins_medium,
        paddingHorizontal: widthRatio(2),
        paddingTop: heightRatio(0.5)
    },
    priceText: {
        paddingHorizontal: widthRatio(2),
        fontSize: textRatio(14.5),
    },
    locationContainer: {
        paddingHorizontal: widthRatio(2),
    }
})