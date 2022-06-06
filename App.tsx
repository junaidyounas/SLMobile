import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { nativeComponentsTheme } from './app/theme/components';
import MainContainer from './app/navigations/mainContainer';
import { colors, nativeBaseColors } from './app/theme/colors';
import { nativeBaseFonts, nativeBaseFontsConfig, nativeBaseFontsSizes } from './app/theme/fonts';
import { nativeBaseConfig } from 'theme/config';

type Props = {};

const App = (props: Props) => {
  const theme = extendTheme({
    colors: nativeBaseColors,
    fontConfig: nativeBaseFontsConfig,
    fonts: nativeBaseFonts,
    components: nativeComponentsTheme,
    fontSizes: nativeBaseFontsSizes
  });
  return (
    <NativeBaseProvider theme={theme} config={nativeBaseConfig}>
      <SafeAreaView style={styles.container}>
        <MainContainer />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
