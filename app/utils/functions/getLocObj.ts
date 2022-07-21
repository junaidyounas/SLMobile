import {requestLocationPermission} from './permissionRequester';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import {logMe} from './logBinder';

export const getCurrentLocationObject = async () => {
  const isPer = await requestLocationPermission();
  if (!isPer) {
    return;
  }
  Geolocation.getCurrentPosition(
    info => {
      console.log('info', info);
      const lng = info.coords.longitude;
      const lat = info.coords.latitude;
      Geocoder.init('AIzaSyC9p1rHfXFy65R_ajwWkrF6PWcsk9sfJNM'); // use a valid API key
      Geocoder.from(lat, lng)
        .then(json => {
          var addressComponent = json.results[0].formatted_address;
          console.log(addressComponent);
          const obj: any = {
            title: addressComponent,
            latitude: lat,
            longitude: lng,
          };
          logMe(obj);
          return obj;
        })
        .catch(error => {
          return null;
          //   console.warn(error);
        });
    },
    error => {
      return null;
      // See error code charts below.
      //   console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};
