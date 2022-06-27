import {KeyboardTypeOptions, StyleSheet} from 'react-native';
import React from 'react';
import {Input, Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';

import {textRatio} from 'utils/functions/textRatio';
import {fonts} from 'theme/fonts';
import RedBarError from 'components/atoms/redBarError';

type Props = {
  marginTop?: number;
  label?: string;
  placeholder?: string;
  rightIcon?: any;
  onChange?: any;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  isSecure?: boolean;
};

const InputWithRightIcon = (props: Props) => {
  const {
    marginTop,
    label,
    placeholder,
    rightIcon,
    onChange,
    value,
    keyboardType,
    error,
    isSecure,
  } = props;

  let otherStyles = [];
  if (marginTop) {
    otherStyles.push({marginTop: heightRatio(marginTop)});
  }
  return (
    <View style={{width: '100%'}}>
      <View style={[styles.container, otherStyles]}>
        <View style={{flex: 1}}>
          {label ? <Text style={styles.label}>{label}</Text> : null}
          <Input
            secureTextEntry={isSecure}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={colors.gray[400]}
            borderWidth={0}
            bgColor={'transparent'}
            textDecorationLine={'none'}
            onChangeText={onChange}
            value={value}
            keyboardType={keyboardType}
          />
        </View>
        {rightIcon ? <View pr={3}>{rightIcon}</View> : null}
      </View>
      {!error ? null : <RedBarError error={error} />}
    </View>
  );
};

export default InputWithRightIcon;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(88),
    backgroundColor: colors.darkblue[800],
    borderRadius: widthRatio(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: colors.gray[400],
    fontSize: textRatio(16),
    fontFamily: fonts.poppins_medium,
    paddingLeft: widthRatio(3),
    paddingTop: heightRatio(1),
  },
  input: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    flex: 1,
    color: colors.gray[100],
    fontFamily: fonts.poppins_medium,
    alignItems: 'center',
  },
});
