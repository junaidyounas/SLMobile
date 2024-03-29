import {StyleSheet} from 'react-native';
import React from 'react';
import ImageCircle from 'components/atoms/imageCircle';
import {Text, View} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {textRatio} from 'utils/functions/textRatio';
import MiniButton from 'components/atoms/miniButton';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from 'store/IAppState';
import {logout} from 'store/auth/authSlice';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';

type Props = {};

const ProfileContainer = (props: Props) => {
  const token = useSelector((state: IAppState) => state.auth.token);
  const user = useSelector((state: IAppState) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <View shadow={1} style={styles.container}>
      <ImageCircle size={20} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>
          {user.email ? user.email : 'You are logged out please login now'}
        </Text>
        <MiniButton
          title={token ? 'Logout' : 'Login'}
          width={18}
          onPress={() => {
            if (!token) {
              navigate(screens.LOGIN);
            } else {
              dispatch(logout());
            }
          }}
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
