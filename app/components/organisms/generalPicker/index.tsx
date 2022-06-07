import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from 'theme/colors'
import LabelText from 'components/atoms/labelText'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'

type Props = {
    label: string;
    marginTop?: number
}

const GeneralPicker = (props: Props) => {
    const { label, marginTop } = props;

    let otherStyles = [];
    if (marginTop) {
        otherStyles.push({ marginTop: heightRatio(marginTop) })
    }
    return (
        <View style={[styles.parent, otherStyles]}>
            <LabelText label={label} />
            <View style={[styles.container]}>
                <Text style={styles.selectedText}>Category Picker</Text>
            </View>
        </View>
    )
}

export default GeneralPicker

const styles = StyleSheet.create({
    parent: {
        marginHorizontal: widthRatio(3)
    },
    container: {
        backgroundColor: colors.gray[200],
        height: heightRatio(6.5),
        borderRadius: widthRatio(3),
        paddingLeft: widthRatio(3),
        justifyContent: 'center'
    },
    selectedText: {
        color: colors.gray[500]
    }
})