import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'native-base'
import { images } from 'assets/images'
import { widthRatio } from 'utils/functions/pixelRatio'

type Props = {
    image: string
}

const MiniImage = (props: Props) => {
    const { image } = props;
    return (
        <TouchableOpacity>
            <Image alt=" " fallbackSource={images.dummy.image} ignoreFallback={false} source={{ uri: image }} style={styles.image} />
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