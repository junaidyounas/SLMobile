import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from 'theme/colors'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import { Box } from 'native-base'
import { textRatio } from 'utils/functions/textRatio'
import { globalstyles } from 'theme/globalStyles'

type Props = {}

const MenuIcon = (props: Props) => {
    return (
        <Box borderRadius={8} bg={globalstyles.btnGradient} style={styles.container}>
            <Ionicons name="menu" size={textRatio(40)} color={colors.white} />
        </Box>
    )
}

export default MenuIcon

const styles = StyleSheet.create({
    container: {
        width: heightRatio(6.5),
        height: heightRatio(6.5),
        alignItems: 'center',
        justifyContent: 'center',
    }
})