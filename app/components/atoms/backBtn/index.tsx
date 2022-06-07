import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { textRatio } from 'utils/functions/textRatio'
import { goBack } from 'navigations/navRef'

type Props = {
    color?: string
}

const BackButton = (props: Props) => {
    const { color } = props;
    return (
        <Pressable onPress={() => goBack()}>
            <Ionicons size={textRatio(20)} name="arrow-back" color={color} />
        </Pressable>
    )
}

export default BackButton

const styles = StyleSheet.create({})