import {Alert, Platform} from 'react-native';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

const galleryPermission = async () => {
  let isPermissionOk = false;
  if (Platform.OS === 'ios') {
    await check(PERMISSIONS.IOS.PHOTO_LIBRARY).then(async result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('Unavailable', 'No permission available for this');
          isPermissionOk = false;
          break;

        case RESULTS.BLOCKED:
          Alert.alert('Blocked', 'Permission blocked please enable it');
          isPermissionOk = false;
          break;

        case RESULTS.LIMITED:
          Alert.alert('lIMITED', 'Please give access for this permission');
          isPermissionOk = false;
          break;

        case RESULTS.DENIED:
          await request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(res => {
            switch (res) {
              case RESULTS.BLOCKED:
                Alert.alert('Blocked', 'Permission blocked please enable it');
                isPermissionOk = false;
                break;

              case RESULTS.GRANTED:
                console.log('Permission granted');
                isPermissionOk = true;
                break;
            }
          });
          break;
        case RESULTS.GRANTED:
          console.log('Permission granted');
          isPermissionOk = true;
          break;
      }
    });
  } else if (Platform.OS === 'android') {
    await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(
      async result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            Alert.alert('Unavailable', 'No permission available for this');
            isPermissionOk = false;
            break;

          case RESULTS.BLOCKED:
            Alert.alert('Blocked', 'Permission blocked please enable it');
            isPermissionOk = false;
            break;

          case RESULTS.LIMITED:
            Alert.alert('lIMITED', 'Please give access for this permission');
            isPermissionOk = false;
            break;

          case RESULTS.DENIED:
            await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(
              res => {
                switch (res) {
                  case RESULTS.BLOCKED:
                    Alert.alert(
                      'Blocked',
                      'Permission blocked please enable it',
                    );
                    isPermissionOk = false;
                    break;

                  case RESULTS.GRANTED:
                    console.log('Permission granted');
                    isPermissionOk = true;
                    break;
                }
              },
            );
            break;
          case RESULTS.GRANTED:
            console.log('Permission granted');
            isPermissionOk = true;
            break;
        }
      },
    );
  }
  return isPermissionOk;
};

export const permissionRequester = {
  galleryPermission,
};
