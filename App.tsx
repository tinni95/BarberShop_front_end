import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import AuthenticationStack from './src/navigation/AuthenticationStack';
import * as Font from "expo-font";
import { AppLoading } from 'expo';
import { TOKEN_KEY } from './src/constants/Token';
import ApolloClient from 'apollo-boost'
import LoginContext from './src/context/LoginContext';
import { ApolloProvider } from 'react-apollo';
import AppWrapper from './src/screens/AppWrapper';
import HomeStack from './src/navigation/HomeStack';

export default function App() {
  const [loggedIn, setLoggedin] = useState<boolean>(false);
  const [token, setToken] = useState<any>(null);
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);

  async function fetchToken(){
    let token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
  }

  const client = new ApolloClient({
    request: (operation) => {
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      })
    },
    uri: "http://104.248.18.88/graphql"
  })

  function logout() {
    AsyncStorage.removeItem(TOKEN_KEY).then(() => {
      setLoggedin(false);
    });
    
  }

  function login() {
    fetchToken().then(tokens => {
      if(tokens){
        console.log("token",tokens)
        setToken(tokens);
        setLoggedin(true)
      }
    })
  }
  
  useEffect(()=>{
    login()
  },[])

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
        <ApolloProvider client={client}>
          <LoginContext.Provider
            value={{ logout: () => logout(), login: () => login() }}
          >
                {!loggedIn ? (
                  <AuthenticationStack></AuthenticationStack>
                ) : (
                  <HomeStack></HomeStack>
                )}
          </LoginContext.Provider>
          </ApolloProvider>
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
