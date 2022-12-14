import {Alert, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import LabelText from 'components/atoms/labelText';
import {colors} from 'theme/colors';
import {Text} from 'native-base';
import LocationEnabler from 'react-native-location-enabler';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import {logMe} from 'utils/functions/logBinder';
import {requestLocationPermission} from 'utils/functions/permissionRequester';
import {getCurrentLocationObject} from 'utils/functions/getLocObj';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';
import {IAppState} from 'store/IAppState';
import {useSelector} from 'react-redux';
import {Location} from 'types/Location';
const {
  PRIORITIES: {HIGH_ACCURACY},
  useLocationSettings,
} = LocationEnabler;

type Props = {
  selectedLocation?: Location;
  isLabel?: boolean;
  flag?: string;
};

const LocationSelector = (props: Props) => {
  const {selectedLocation, isLabel, flag} = props;
  const [enabled, requestResolution] = useLocationSettings(
    {
      priority: HIGH_ACCURACY, // default BALANCED_POWER_ACCURACY
      alwaysShow: true, // default false
      needBle: true, // default false
    },
    false /* optional: default undefined */,
  );

  const addLocation = useSelector(
    (state: IAppState) => state.app.addPostLocation,
  );

  const searchLocation = useSelector(
    (state: IAppState) => state.app.searchLocation,
  );

  const [isLoading, setIsLoading] = useState(false);

  const getCurrentLocation = async () => {
    setIsLoading(true);
    const data: any = await getCurrentLocationObject();
    console.log('data', data);
    if (!data) {
      Alert.alert('No data available');
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {!isLabel ? null : <LabelText label={'Location'} />}
      <Pressable
        onPress={() => {
          navigate(screens.LOCATION_CHOOSER, {flag: flag});
        }}
        style={styles.locationContainer}>
        <Text numberOfLines={1} style={styles.selectedText}>
          {flag == 'search' ? searchLocation?.title : addLocation?.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(100),
    paddingHorizontal: widthRatio(3),
  },
  locationContainer: {
    backgroundColor: colors.gray[200],
    height: heightRatio(6.5),
    borderRadius: widthRatio(2),
    paddingLeft: widthRatio(3),
    justifyContent: 'center',
  },
  selectedText: {
    color: colors.gray[500],
  },
});
