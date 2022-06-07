import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { fonts } from 'theme/fonts'

type Props = {
    label: string,
}

const LabelText = (props: Props) => {
    const { label } = props;

    return (
        <Text style={styles.header}>{label}</Text>
    )
}

export default LabelText

const styles = StyleSheet.create({
    header: {
        fontFamily: fonts.poppins_semi_bold
    },
})