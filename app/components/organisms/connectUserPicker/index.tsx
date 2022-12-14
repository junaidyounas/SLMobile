import {Pressable} from 'native-base';
import React from 'react';
import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {onClose, onOpen, Picker} from 'react-native-actions-sheet-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from 'theme/colors';
import {SinglePostType} from 'types/posts/SinglePostType';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';

type Props = {
  marginTop?: number;
  data?: any;
  number?: number;
  whatsappCall?: number;
  whatsappMessage?: number;
  imoCall?: number;
  imoMessage?: number;
  postData?: SinglePostType;
};

const ConnectUserPicker = (props: Props) => {
  const {
    marginTop,
    whatsappCall,
    whatsappMessage,
    imoCall,
    imoMessage,
    postData,
  } = props;

  const data = [
    {id: 1, title: 'Call'},
    {id: 2, title: 'Message'},
    whatsappCall ? {id: 3, title: 'Call by whatsapp'} : {},
    whatsappMessage ? {id: 4, title: 'Message by Whatsapp'} : {},
    imoCall ? {id: 5, title: 'Call by Imo'} : {},
    imoMessage ? {id: 6, title: 'Message by Imo'} : {},
  ];

  let otherStyles = [];
  if (marginTop) {
    otherStyles.push({marginTop: heightRatio(marginTop)});
  }

  const {phone = null} = {phone: postData?.user?.phone};
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
              onPress={async () => {
                if (!phone) {
                  return;
                }
                if (item.id == 1) {
                  await Linking.openURL(`tel:${phone}`);
                } else if (item.id == 2) {
                  const separator = Platform.OS === 'ios' ? '&' : '?';
                  const url = `sms:${phone}${separator}body=I wana know about this ad.`;
                  await Linking.openURL(url);
                }
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
