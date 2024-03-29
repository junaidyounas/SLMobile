import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from 'theme/colors';
import LabelText from 'components/atoms/labelText';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {Pressable} from 'native-base';
import {Picker, onOpen, onClose} from 'react-native-actions-sheet-picker';
import RedBarError from 'components/atoms/redBarError';

type Props = {
  label?: string;
  marginTop?: number;
  placeholder?: string;
  id: string;
  data: any;
  setValue: any;
  value: string;
  error?: string;
};

const GeneralPicker = (props: Props) => {
  const {label, marginTop, placeholder, id, data, setValue, value, error} =
    props;
  const [s, setSelected] = useState('');

  let otherStyles = [];
  if (marginTop) {
    otherStyles.push({marginTop: heightRatio(marginTop)});
  }
  return (
    <View style={[styles.parent, otherStyles]}>
      {label ? <LabelText label={label} /> : null}
      <Pressable onPress={() => onOpen(id)} style={[styles.container]}>
        <Text style={styles.selectedText}>{value ? value : placeholder}</Text>
      </Pressable>
      <Picker
        id={id}
        data={data}
        label="Please select one option"
        setSelected={() => {}}
        renderListItem={(item: any) => {
          return (
            <Pressable
              style={{paddingVertical: heightRatio(3)}}
              onPress={() => {
                setValue(item);
                onClose(id);
              }}>
              <Text>{item.title}</Text>
            </Pressable>
          );
        }}
      />
      {!error ? null : <RedBarError error={error} />}
    </View>
  );
};

export default GeneralPicker;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: widthRatio(3),
  },
  container: {
    backgroundColor: colors.gray[200],
    height: heightRatio(6.5),
    borderRadius: widthRatio(3),
    paddingLeft: widthRatio(3),
    justifyContent: 'center',
  },
  selectedText: {
    color: colors.gray[500],
  },
});
