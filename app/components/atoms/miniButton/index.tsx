import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Box, Text } from 'native-base'
import { globalstyles } from 'theme/globalStyles'
import { colors } from 'theme/colors'

type Props = {}

const MiniButton = (props: Props) => {
    return (
        <TouchableOpacity>
            <Box borderRadius={6} bg={globalstyles.btnGradient}>
                <Text p={1} color={colors.white}>Select Images</Text>
            </Box>
        </TouchableOpacity>
    )
}

export default MiniButton

const styles = StyleSheet.create({})