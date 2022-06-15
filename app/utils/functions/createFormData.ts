import {Platform} from 'react-native';

export const createFormData = (photos: any, body = {}) => {
  const data = new FormData();

  photos.map((item: any) =>
    data.append('files', {
      name: item.name,
      type: item.type,
      uri: Platform.OS === 'ios' ? item.uri.replace('file://', '') : item.uri,
    }),
  );
  return data;
};

export const createSingleFormData = (photos: any, body = {}) => {
  const data = new FormData();

  data.append('file', {
    name: photos.name,
    type: photos.type,
    uri: Platform.OS === 'ios' ? photos.uri.replace('file://', '') : photos.uri,
  });
  return data;
};
