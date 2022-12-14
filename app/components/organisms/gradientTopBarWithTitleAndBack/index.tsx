import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, Text } from 'native-base'
import { colors } from 'theme/colors'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import { fonts } from 'theme/fonts'
import { textRatio } from 'utils/functions/textRatio'
import BackButton from 'components/atoms/backBtn'

type Props = {
    title?: string,
    isBack?: boolean
}

const GradientTopBarWithBackBtn = (props: Props) => {
    const { title, isBack } = props;
    const gradientBg = {
        linearGradient: {
            colors: [colors.darkblue[800], colors.darkblue[600]],
            start: [0, 1],
            end: [1, 0],
        },
    }
    return (
        <Box bg={gradientBg} style={styles.container}>
            {isBack ? <BackButton color={colors.white} /> : null}
            <Text style={styles.title}>{title}</Text>
        </Box>
    )
}

export default GradientTopBarWithBackBtn

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: widthRatio(3),
        paddingVertical: heightRatio(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: colors.white,
        fontFamily: fonts.poppins_regular,
        fontSize: textRatio(18),
        paddingLeft: widthRatio(4)
    }
})