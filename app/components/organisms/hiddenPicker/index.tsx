import { Pressable } from 'native-base'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { onClose, Picker } from 'react-native-actions-sheet-picker'
import { heightRatio } from 'utils/functions/pixelRatio'

type Props = {
    id: string,
    options: any,
    label: string,
    onOptionSelect: any
}

const HiddenPicker = (props: Props) => {
    const { id, options, label, onOptionSelect } = props;
    return (
        <Picker
            id={id}
            height={heightRatio(35)}
            data={options}
            label={label}
            setSelected={(value) => { console.log(value) }}
            renderListItem={(item: any) => {
                return (
                    <Pressable style={{ paddingVertical: heightRatio(3) }} onPress={() => {
                        onClose(id);
                        onOptionSelect(item);
                    }}>
                        <Text>{item}</Text>
                    </Pressable>
                )
            }} />
    )
}

export default HiddenPicker

const styles = StyleSheet.create({

})