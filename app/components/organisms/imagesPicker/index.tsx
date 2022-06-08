import { AppConstants } from 'constants/appConstants'
import { Pressable } from 'native-base'
import React from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import { onClose, Picker } from 'react-native-actions-sheet-picker'
import { heightRatio } from 'utils/functions/pixelRatio'
import DocumentPicker from 'react-native-document-picker';

type Props = {
    id: string,
    label: string,
    onOptionSelect: any
}
const ImageSelectConstants = ['Select from gallery', 'Take photo from camera', 'cancel']

const pickImages = async () => {
    try {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });
    } catch (err) {
        console.log(err)
    }
}

const ImagesPicker = (props: Props) => {
    const { id, label, onOptionSelect } = props;
    const onSelectImageOption = (value: string) => {
        if (value === ImageSelectConstants[0]) {
            pickImages();
        } else if (value === ImageSelectConstants[1]) {
            Alert.alert('Take Photo')
        } else if (value === ImageSelectConstants[2]) {
            Alert.alert('Cancel');
        }
    }
    if (id == AppConstants.images_picker) {
        return (
            <Picker
                id={AppConstants.images_picker}
                height={heightRatio(35)}
                data={ImageSelectConstants}
                label={label}
                setSelected={(value) => { console.log(value) }}
                renderListItem={(item: any) => {
                    return (
                        <Pressable style={{ paddingVertical: heightRatio(3) }} onPress={() => {
                            onClose(AppConstants.images_picker);
                            onSelectImageOption(item);
                        }}>
                            <Text>{item}</Text>
                        </Pressable>
                    )
                }} />
        )
    } else {
        return (
            <Picker
                id={AppConstants.single_image_picker}
                height={heightRatio(35)}
                data={ImageSelectConstants}
                label={label}
                setSelected={(value) => { console.log(value) }}
                renderListItem={(item: any) => {
                    return (
                        <Pressable style={{ paddingVertical: heightRatio(3) }} onPress={() => {
                            onClose(AppConstants.single_image_picker);
                            onSelectImageOption(item);
                        }}>
                            <Text>{item}</Text>
                        </Pressable>
                    )
                }} />
        )
    }
}

export default ImagesPicker

const styles = StyleSheet.create({

})