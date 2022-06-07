import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, TextArea } from 'native-base'
import { colors } from 'theme/colors'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import { textRatio } from 'utils/functions/textRatio'
import { fonts } from 'theme/fonts'

type Props = {
    marginTop?: number,
    placeholder?: string,
    label?: string,
    isTextView?: boolean
}

const InputTextView = (props: Props) => {
    const { marginTop, placeholder, label, isTextView } = props;
    let otherStyles = [];
    if (marginTop) {
        otherStyles.push({ marginTop: heightRatio(marginTop) })
    }
    return (
        <View style={[styles.parent, otherStyles]}>
            {label ? <Text style={styles.header}>{label}</Text> : null}
            <View style={[styles.container]}>
                {
                    isTextView ?
                        <TextArea placeholder={placeholder} autoCompleteType={undefined} />
                        :
                        <Input placeholder={placeholder} />
                }
            </View>
        </View>
    )
}

export default InputTextView

const styles = StyleSheet.create({
    parent: {
        paddingHorizontal: widthRatio(3)
    },
    header: {
        fontFamily: fonts.poppins_semi_bold
    },
    container: {
        backgroundColor: colors.gray[100],

    }
})