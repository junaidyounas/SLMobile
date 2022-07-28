import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import {Input} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {textRatio} from 'utils/functions/textRatio';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {colors} from 'theme/colors';
import {logMe} from 'utils/functions/logBinder';
type Props = {};

const LocationChooser = (props: Props) => {
  const ref: any = useRef();
  return (
    <View style={styles.container}>
      <GradientTopBarWithBackBtn title={'My Ads'} isBack />
      <View style={styles.inputView}>
        {/* <Input
          variant="rounded"
          style={styles.input}
          placeholder="Search location"
          InputLeftElement={
            <View style={styles.locIcon}>
              <Ionicons name="location" size={textRatio(25)} />
            </View>
          }
        /> */}
        <GooglePlacesAutocomplete
          textInputProps={{
            placeHolderTextColor: colors.gray[500],
          }}
          numberOfLines={1}
          ref={ref as any}
          styles={{
            container: {
              flex: 1,
            },
            textInputContainer: {
              fontFamily: 'Quicksand-Medium',
              flexDirection: 'row',
            },
            textInput: {
              flex: 1,
              backgroundColor: colors.gray[500],
              height: heightRatio(6.5),
              color: colors.black,
              borderRadius: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              fontSize: 15,
              fontFamily: 'Quicksand-Medium',
            },
            poweredContainer: {
              justifyContent: 'flex-end',
              alignItems: 'center',
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
              borderColor: '#c8c7cc',
              borderTopWidth: 0.5,
              opacity: 0,
            },
            powered: {},
            listView: {
              fontFamily: 'Quicksand-Regular',
              zIndex: 2000,
              height: heightRatio(70),
              position: 'relative',
            },
            row: {
              backgroundColor: colors.white,
              height: 44,
              flexDirection: 'row',
              fontFamily: 'Quicksand-Regular',
              zIndex: 2000,
              position: 'relative',
            },
            separator: {
              height: 0.5,
              backgroundColor: colors.gray[500],
            },
            description: {
              fontFamily: 'Quicksand-Regular',
            },
            loader: {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              height: 20,
            },
          }}
          placeholder={'Write your location'}
          minLength={3}
          onFail={error => logMe(error)}
          fetchDetails={true}
          onPress={(data, details: any = null) => {
            const geometry = details.geometry?.location || 0;
            const locationName = data.description;
            const obj: any = {
              title: locationName,
              latitude: geometry.lat,
              longitude: geometry.lng,
            };
            logMe(obj);
          }}
          query={{
            key: 'AIzaSyA6Fln466j0tXOTKRhawztWHVNwegmQGBM',
            language: 'en',
          }}
        />
      </View>
    </View>
  );
};

export default LocationChooser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    width: widthRatio(100),
    height: heightRatio(9),
    paddingHorizontal: widthRatio(2),
    paddingVertical: heightRatio(1),
  },
  input: {
    width: widthRatio(100),
    height: heightRatio(5),
    borderRadius: widthRatio(3),
  },
  locIcon: {
    paddingLeft: widthRatio(3),
    marginRight: -widthRatio(2),
  },
});
