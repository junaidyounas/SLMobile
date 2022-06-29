import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Box, FlatList, Image, ScrollView, View} from 'native-base';
import {globalstyles} from 'theme/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'theme/colors';
import {textRatio} from 'utils/functions/textRatio';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import BackAndShareButtonHeader from 'components/molecules/backAndShareHeader';
import {images} from 'assets/images';
import {fonts} from 'theme/fonts';
import PriceAndName from 'components/molecules/priceAndName';
import LocationWithIcon from 'components/atoms/locationWithIcon';
import DetailsTable from 'components/organisms/detailsTable';

type Props = {};

const ImageSingleItem = () => {
  return (
    <Image
      style={{width: widthRatio(100), height: heightRatio(50)}}
      source={images.dummy.image}
      alt=" "
    />
  );
};

const SinglePostScreen = (props: Props) => {
  return (
    <Box style={styles.container} bg={globalstyles.btnGradient}>
      <ScrollView>
        <BackAndShareButtonHeader />
        <FlatList
          horizontal
          pagingEnabled
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={ImageSingleItem}
        />
        <PriceAndName />
        <View style={styles.content}>
          <LocationWithIcon
            color={colors.gray[100]}
            location="Islamabad"
            fontSize={16}
          />
          <Text style={styles.detailsText}>Details</Text>
          <DetailsTable />
        </View>
      </ScrollView>
    </Box>
  );
};

export default SinglePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: widthRatio(3),
  },
  detailsText: {
    color: colors.gray[100],
    fontFamily: fonts.poppins_semi_bold,
    marginTop: heightRatio(3),
  },
});
