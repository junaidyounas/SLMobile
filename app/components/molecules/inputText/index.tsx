import {KeyboardTypeOptions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input, TextArea} from 'native-base';
import {colors} from 'theme/colors';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';
import {fonts} from 'theme/fonts';
import LabelText from 'components/atoms/labelText';
import RedBarError from 'components/atoms/redBarError';

type Props = {
  marginTop?: number;
  placeholder?: string;
  label?: string;
  isTextView?: boolean;
  error?: string;
  onChange: any;
  value: any;
  onBlur?: any;
  keyboardType?: KeyboardTypeOptions;
  paddingHorizontal?: number;
};

const InputTextView = (props: Props) => {
  const {
    marginTop,
    placeholder,
    label,
    isTextView,
    error,
    onChange,
    value,
    onBlur,
    keyboardType,
    paddingHorizontal,
  } = props;
  let otherStyles = [];
  if (marginTop) {
    otherStyles.push({marginTop: heightRatio(marginTop)});
  }
  if (paddingHorizontal) {
    otherStyles.push({paddingHorizontal: widthRatio(paddingHorizontal)});
  }
  return (
    <View style={[styles.parent, otherStyles]}>
      {label ? <LabelText label={label} /> : null}
      <View style={[styles.container]}>
        {isTextView ? (
          <TextArea
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            autoCompleteType={undefined}
          />
        ) : (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
          />
        )}
      </View>
      {!error ? null : <RedBarError error={error} />}
    </View>
  );
};

export default InputTextView;

const styles = StyleSheet.create({
  parent: {},

  container: {
    backgroundColor: colors.gray[100],
  },
});
