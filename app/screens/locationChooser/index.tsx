import GradientTopBarWithBackBtn from 'components/organisms/gradientTopBarWithTitleAndBack';
import {AppConstants} from 'constants/appConstants';
import {FlatList, Pressable, Text, View} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import {useDispatch, useSelector} from 'react-redux';
import {
  addLocationInHistory,
  addPostLocation,
  addSearchLocation,
  removeLocationFromHistory,
} from 'store/appState/appSlice';
import {IAppState} from 'store/IAppState';
import {colors} from 'theme/colors';
import {fonts} from 'theme/fonts';
import {logMe} from 'utils/functions/logBinder';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import Entypo from 'react-native-vector-icons/Entypo';
import {textRatio} from 'utils/functions/textRatio';
import {Location} from 'types/Location';
import {goBack} from 'navigations/navRef';

type Props = {
  route?: any;
};

const LocationChooser = (props: Props) => {
  const ref: any = useRef();
  const dispatch = useDispatch();
  const params = props?.route?.params;
  const locationHistory = useSelector(
    (state: IAppState) => state.app.locationHistory,
  );
  const addLocation = useSelector(
    (state: IAppState) => state.app.addPostLocation,
  );

  const searchLocation = useSelector(
    (state: IAppState) => state.app.searchLocation,
  );

  const locationHistoryRenderItem = ({
    item,
    index,
  }: {
    item: Location;
    index: number;
  }) => {
    return (
      <View style={styles.locationHistoryItem}>
        <Pressable
          onPress={() => {
            if (params?.flag && params?.flag == 'search') {
              dispatch(addSearchLocation(item));
            } else {
              dispatch(addPostLocation(item));
            }
            goBack();
          }}>
          <Text style={styles.locationHistoryText}>{item.title}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            dispatch(removeLocationFromHistory(index));
          }}>
          <Entypo name="circle-with-cross" size={textRatio(20)} />
        </Pressable>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <GradientTopBarWithBackBtn title={'My Ads'} isBack />
      <View style={styles.inputView}>
        <View pr={2} flexDirection="row" alignItems="center" zIndex="2000">
          <GooglePlacesAutocomplete
            textInputProps={{
              placeHolderTextColor: colors.gray[500],
            }}
            numberOfLines={2}
            ref={ref as any}
            styles={{
              container: {
                flex: 1,
              },
              textInputContainer: {
                fontFamily: fonts.poppins_regular,
                flexDirection: 'row',
              },
              textInput: {
                flex: 1,
                backgroundColor: colors.gray[200],
                height: heightRatio(6.5),
                color: colors.black,
                borderRadius: 5,
                paddingVertical: 5,
                paddingHorizontal: 10,
                fontSize: 15,
                fontFamily: fonts.poppins_regular,
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
                fontFamily: fonts.poppins_regular,
                zIndex: 2000,
                height: heightRatio(70),
                position: 'relative',
              },
              separator: {
                height: 0.5,
                backgroundColor: colors.gray[500],
              },
              description: {
                fontFamily: fonts.poppins_regular,
              },
              loader: {
                flexDirection: 'row',
                justifyContent: 'flex-end',
                height: 20,
              },
            }}
            renderRow={(data: GooglePlaceData) => {
              return (
                <View style={{width: widthRatio(95)}}>
                  <Text style={styles.rowText} numberOfLines={2}>
                    {data.description}
                  </Text>
                </View>
              );
            }}
            filterReverseGeocodingByTypes={['locality']}
            placeholder={
              params?.flag == 'search'
                ? searchLocation?.title
                : addLocation?.title
            }
            minLength={5}
            onFail={error => logMe(error)}
            fetchDetails={true}
            onPress={(data, details: any = null) => {
              const geometry = details.geometry?.location || 0;
              const locationName = data.description;
              const obj: any = {
                title: locationName,
                coordinates: [geometry.lng, geometry.lat],
                type: 'Point',
              };
              if (params?.flag && params?.flag == 'search') {
                dispatch(addSearchLocation(obj));
              } else {
                dispatch(addPostLocation(obj));
              }
              dispatch(addLocationInHistory(obj));

              logMe(obj);
              goBack();
            }}
            query={{
              key: AppConstants.mapAPIKey,
              language: 'en',
              components: 'country:pk',
            }}
          />
          <Pressable
            pl={2}
            onPress={() => {
              const obj: any = {
                title: '',
                coordinates: null,
                type: '',
              };
              if (params?.flag && params?.flag == 'search') {
                dispatch(addSearchLocation(obj));
              } else {
                dispatch(addPostLocation(obj));
              }
              goBack();
            }}>
            <Entypo name="circle-with-cross" size={textRatio(30)} />
          </Pressable>
        </View>

        {/* location history array */}
        <Text style={styles.searchHistory}>Search History</Text>
        <FlatList
          renderItem={locationHistoryRenderItem}
          data={locationHistory}
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
    // height: heightRatio(9),
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
  rowText: {
    fontFamily: fonts.poppins_regular,
    color: colors.gray[500],
  },
  locationHistoryItem: {
    width: widthRatio(95),
    backgroundColor: colors.gray[200],
    paddingHorizontal: widthRatio(3),
    paddingVertical: heightRatio(1),
    marginBottom: heightRatio(1),
    borderRadius: widthRatio(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchHistory: {
    fontFamily: fonts.poppins_medium,
    marginTop: heightRatio(2),
  },
  locationHistoryText: {
    fontFamily: fonts.poppins_regular,
  },
});
