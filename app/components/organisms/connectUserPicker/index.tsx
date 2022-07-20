import {Pressable} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {onClose, onOpen, Picker} from 'react-native-actions-sheet-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from 'theme/colors';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';

type Props = {
  marginTop?: number;
  data?: any;
  number?: number;
  whatsappCall?: number;
  whatsappMessage?: number;
  imoCall?: number;
  imoMessage?: number;
};

const ConnectUserPicker = (props: Props) => {
  const {marginTop, whatsappCall, whatsappMessage, imoCall, imoMessage} = props;

  const data = [
    {id: 1, title: 'Call'},
    {id: 3, title: 'Message'},
    whatsappCall ? {id: 2, title: 'Call by whatsapp'} : {},
    whatsappMessage ? {id: 4, title: 'Message by Whatsapp'} : {},
    imoCall ? {id: 2, title: 'Call by Imo'} : {},
    imoMessage ? {id: 4, title: 'Message by Imo'} : {},
  ];

  let otherStyles = [];
  if (marginTop) {
    otherStyles.push({marginTop: heightRatio(marginTop)});
  }
  return (
    <View style={[styles.parent, otherStyles]}>
      <TouchableOpacity
        onPress={() => {
          onOpen('connectUser');
        }}
        style={styles.btnBg}>
        <MaterialIcons
          name="wifi-calling"
          color={colors.darkblue[600]}
          size={widthRatio(6)}
        />
      </TouchableOpacity>
      <Picker
        id={'connectUser'}
        data={data}
        label="How do you want to connect?"
        setSelected={() => {}}
        renderListItem={(item: any) => {
          return (
            <Pressable
              style={{paddingVertical: heightRatio(3)}}
              onPress={() => {
                onClose('connectUser');
              }}>
              <Text>{item.title}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default ConnectUserPicker;

const styles = StyleSheet.create({
  parent: {},
  btnBg: {
    width: widthRatio(10),
    height: widthRatio(10),
    margin: widthRatio(2),
    borderRadius: widthRatio(2),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
