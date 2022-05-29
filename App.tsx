import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { nativeComponentsTheme } from './app/theme/components';
import MainContainer from './app/navigations/mainContainer';
import { colors, nativeBaseColors } from './app/theme/colors';
import { nativeBaseFonts, nativeBaseFontsConfig } from './app/theme/fonts';

type Props = {};

const App = (props: Props) => {
  const theme = extendTheme({
    colors: nativeBaseColors,
    fontConfig: nativeBaseFontsConfig,
    fonts: nativeBaseFonts,
    components: nativeComponentsTheme,
  });
  return (
    <NativeBaseProvider theme={theme}>
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
