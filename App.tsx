import {extendTheme, NativeBaseProvider} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {nativeComponentsTheme} from './app/theme/components';
import MainContainer from './app/navigations/mainContainer';
import {colors, nativeBaseColors} from './app/theme/colors';
import {
  nativeBaseFonts,
  nativeBaseFontsConfig,
  nativeBaseFontsSizes,
} from './app/theme/fonts';
import {nativeBaseConfig} from 'theme/config';
import {Provider} from 'react-redux';
import {persistor, store} from './app/store/store';
import {PersistGate} from 'redux-persist/integration/react';

// type Props = {};

const App = () => {
  const theme = extendTheme({
    colors: nativeBaseColors,
    fontConfig: nativeBaseFontsConfig,
    fonts: nativeBaseFonts,
    components: nativeComponentsTheme,
    fontSizes: nativeBaseFontsSizes,
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme} config={nativeBaseConfig}>
          <View style={styles.container}>
            <MainContainer />
          </View>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
