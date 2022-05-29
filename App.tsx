import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import MainContainer from './app/navigation/mainContainer';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from './app/theme/colors';

type Props = {};

const App = (props: Props) => {
  const theme = extendTheme({
    colors: colors,
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
