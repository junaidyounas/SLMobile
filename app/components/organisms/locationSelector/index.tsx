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
const {
  PRIORITIES: {HIGH_ACCURACY},
  useLocationSettings,
} = LocationEnabler;

type Props = {};

const LocationSelector = (props: Props) => {
  const [enabled, requestResolution] = useLocationSettings(
    {
      priority: HIGH_ACCURACY, // default BALANCED_POWER_ACCURACY
      alwaysShow: true, // default false
      needBle: true, // default false
    },
    false /* optional: default undefined */,
  );
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentLocation = async () => {
    setIsLoading(true);
    const data: any = await getCurrentLocationObject();
    if (!data) {
      Alert.alert('No data available');
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LabelText label={'Location'} />
      <Pressable
        onPress={() => {
          getCurrentLocation();
        }}
        style={styles.locationContainer}>
        <Text style={styles.selectedText}>Location</Text>
      </Pressable>
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    width: widthRatio(100),
    paddingHorizontal: widthRatio(3),
    marginTop: heightRatio(2),
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