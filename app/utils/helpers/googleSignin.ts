import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';
import {userService} from 'services/userService';
import {logMe} from 'utils/functions/logBinder';
type UserInfoToken = {};

export class GoogleAuthClass {
  uInfo: any;
  constructor() {
    GoogleSignin.configure({
      webClientId:
        '330078838431-vd3kjau3r5veqqhs4fjqjlrrbjan37bk.apps.googleusercontent.com',
      // androidClientId: '330078838431-termrb1ibjjtnkknqmpvfhmifi8pf7f7.apps.googleusercontent.com',
    });
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log('user name =>', userInfo.user);
      const {email, name} = userInfo.user;
      await userService.loginViaGoogleCredentials(email, name).then(() => {
        navigate(screens.HOME);
      });
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.warn('SIGN IN CANCELLED', error.message);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.warn('IN PROGRESS', error.message);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.warn('play services not available or outdated', error.message);
      } else {
        console.warn('Meassage', error.message);
      }
    }
  };

  // signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     logMe('idToken', {userInfo});
  //     // const credential = auth.GoogleAuthProvider.credential(
  //     //   userInfo.idToken,
  //     //   null,
  //     // );
  //     // // logMe('credential', credential);
  //     // const authInfo = await auth().signInWithCredential(credential);
  //     // // logMe('==================authInfo=============', authInfo);
  //     // const token = await authInfo.user.getIdToken();
  //     // logMe('userInfo', token);
  //     // const data = await userService.getFirebaseLoginToken(token);
  //     // logMe('data', data);

  //     // return userInfo;
  //   } catch (error: any) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       logMe(error);
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       logMe(error);
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       logMe(error);
  //     } else {
  //       logMe(error);
  //     }
  //   }
  // };

  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    return isSignedIn;
  };

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    return currentUser;
  };

  getTokens = async () => {
    const token = await GoogleSignin.getTokens();
    return token;
  };

  getFirebaseToken = async () => {
    const userInfo = await GoogleSignin.signIn();
    // const credential = auth.GoogleAuthProvider.credential(userInfo.idToken);
    // logMe('getFirebaseToken', credential);
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  revokeAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
      console.log('deleted');
    } catch (error) {
      console.error(error);
    }
  };
}
