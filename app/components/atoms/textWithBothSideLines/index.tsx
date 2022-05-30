import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from 'native-base'
import { colors } from 'theme/colors'
import { fonts } from 'theme/fonts'
import { heightRatio } from 'utils/functions/pixelRatio'

type Props = {
    marginTop?: number
}

const TextWithBothSideLines = (props: Props) => {
    const { marginTop } = props;
    return (
        <View style={[styles.container, marginTop ? { marginTop: heightRatio(marginTop) } : {}]}>
            <View style={styles.line} />
            <Text style={styles.text}> Or sign up with </Text>
            <View style={styles.line} />
        </View>
    )
}

export default TextWithBothSideLines

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.gray[200],
    },
    text: {
        color: colors.gray[200],
        fontFamily: fonts.poppins_medium,
    }
})