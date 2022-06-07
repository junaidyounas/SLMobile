import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'native-base'
import { images } from 'assets/images'
import { widthRatio } from 'utils/functions/pixelRatio'

type Props = {}

const MiniImage = (props: Props) => {
    return (
        <TouchableOpacity>
            <Image alt=" " source={images.dummy.image} style={styles.image} />
        </TouchableOpacity>
    )
}

export default MiniImage

const styles = StyleSheet.create({
    image: {
        width: widthRatio(15),
        height: widthRatio(15),
        marginHorizontal: widthRatio(1),
        marginVertical: widthRatio(1),
        borderRadius: widthRatio(1)
    }
})