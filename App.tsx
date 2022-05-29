import {Text, View} from 'native-base';
import React from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import { colors } from './app/theme/colors';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const App = (props: Props) => {
  const theme = extendTheme({
    colors: colors,
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Text>App</Text>
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
