import {Input, Pressable, Spinner, useToast} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme/colors';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';
import * as Yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {
  onSend: any;
  isLoading: boolean;
  value: string;
  onChange: any;
};

const validationSchema = Yup.object().shape({
  value: Yup.string().trim().required().label('Message'),
});

const ChatResponseBar = (props: Props) => {
  const toast = useToast();

  const id = 'error-toast';
  const {onSend, isLoading, onChange, value} = props;

  return (
    <View style={styles.container}>
      <Input
        w={{
          base: '100%',
        }}
        h={{base: heightRatio(6)}}
        InputRightElement={
          isLoading ? (
            <Spinner size="lg" mr={2} color={colors.darkblue[700]} />
          ) : (
            <Pressable mr={2}>
              <Ionicons
                color={colors.darkblue[700]}
                name="md-send"
                size={textRatio(25)}
              />
            </Pressable>
          )
        }
        size={5}
        mr="2"
        color={colors.black}
        placeholder="Type your message"
        fontFamily="Quicksand-Medium"
        fontSize={textRatio(16)}
        borderLeftWidth={0}
        borderRightWidth={0}
        borderBottomWidth={0}
        onChangeText={onChange}
        value={value}
        returnKeyType="default"
        borderTopWidth={0}
      />
    </View>
  );
};

export default ChatResponseBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: widthRatio(2),
    bottom: 0,
  },
});
