import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from 'theme/colors'
import { widthRatio } from 'utils/functions/pixelRatio'
import { textRatio } from 'utils/functions/textRatio'

type Props = {
    error?: string
}

const RedBarError = (props: Props) => {
    const { error } = props;
    return (
        <View style={{
            backgroundColor: colors.red, borderBottomLeftRadius: widthRatio(2),
            borderBottomRightRadius: widthRatio(2),
            paddingVertical: widthRatio(0.7),
            paddingHorizontal: widthRatio(2)
        }}>
            <Text style={{ color: colors.white, fontSize: textRatio(14) }}>{error}</Text>
        </View>
    )
}

export default RedBarError

const styles = StyleSheet.create({})