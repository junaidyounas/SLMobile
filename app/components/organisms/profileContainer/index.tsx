import {StyleSheet} from 'react-native';
import React from 'react';
import ImageCircle from 'components/atoms/imageCircle';
import {Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';
import MiniButton from 'components/atoms/miniButton';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from 'store/IAppState';
import {login} from 'store/auth/authSlice';

type Props = {};

const ProfileContainer = (props: Props) => {
  const token = useSelector((state: IAppState) => state.auth.token);
  const dispatch = useDispatch();
  return (
    <View shadow={1} style={styles.container}>
      <ImageCircle size={20} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Junaid Younas</Text>
        <Text style={styles.email}>junaidammar2013@gmail.com</Text>
        <MiniButton
          title={token ? 'Logout' : 'Login'}
          width={18}
          onPress={() => dispatch(login(''))}
        />
      </View>
    </View>
  );
};

export default ProfileContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthRatio(6),
    paddingVertical: heightRatio(2),
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: widthRatio(2),
  },
  name: {
    fontSize: textRatio(20),
  },
  email: {
    fontSize: textRatio(13),
    paddingBottom: heightRatio(1),
  },
});
