import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthenticationStack from './src/navigation/AuthenticationStack';
import * as Font from "expo-font";
import { AppLoading } from 'expo';
import { LandingPage } from './src/screens/AuthenticationStack';

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
  return (
    <View style={styles.container}>
     <AuthenticationStack></AuthenticationStack>
    </View>
  );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
  Font.loadAsync({
    "sequel-sans": require("./assets/fonts/regular.otf"),
    "sequel-sans-bold": require("./assets/fonts/medium.otf"),
    "sequel-sans-light": require("./assets/fonts/light.otf")
  }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
});
