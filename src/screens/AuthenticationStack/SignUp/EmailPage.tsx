import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { isSmallDevice } from '../../../constants/Layout';
import GlobalTextInput from '../../../components/GlobalTextInput';
import HeaderRight from '../../../components/HeaderRight';
import { validateEmail } from '../../../functions/validators';
import { wait } from '../../../functions/wait';
import HeaderLeft from '../../../components/HeaderLeft';

export default function EmailPage({ navigation }) {
  const user = navigation.getParam('user', null);
  const emailUsed = navigation.getParam('emailUsed', null);
  const [email, setEmail] = useState('');
  const [reEmail, setReEmail] = useState('');
  const [emailError, setEmailError] = useState<any>(undefined);
  const [reEmailError, setReEmailError] = useState<any>(undefined);

  let preinput = useRef<any>();
  let input = useRef<any>();

  useEffect(() => {
    wait(100).then(() => {
      preinput.current.focus();
    });
  }, []);

  useEffect(() => {
    navigation.setParams({ login });
  }, [email, reEmail]);

  const login = () => {
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (email != reEmail) {
      setReEmailError(true);
    } else {
      setReEmailError(false);
    }
    if (validateEmail(email) && email == reEmail) {
      navigation.navigate('PasswordPage', { user: { ...user, email } });
    }
  };

  return (
    <View style={styles.container}>
      <GlobalTextInput
        reference={preinput}
        label="Email"
        autoCapitalize="none"
        value={email}
        hintError={emailError || emailUsed}
        hintText={emailUsed ? 'email gia in uso' : 'email non valida'}
        placeholder={'email'}
        onChangeText={(text:any) => setEmail(text)}
        onSubmitEditing={() => input.current.focus()}
      />
      <GlobalTextInput
        reference={input}
        label="Repeat Email"
        value={reEmail}
        autoCapitalize="none"
        hintError={reEmailError}
        hintText={"Email don't match"}
        placeholder={'email'}
        onChangeText={(text:any) => setReEmail(text)}
        onSubmitEditing={() => login()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  formContainer: {
    margin: 50,
    marginTop: isSmallDevice ? 20 : 40,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: isSmallDevice ? 10 : 7.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  spacer: { height: 20 },
});

EmailPage.navigationOptions = ({ navigation }) => {
  return {
    title: null,
    headerLeft: () => <HeaderLeft navigation={navigation}></HeaderLeft>,
    headerRight: () => (
      <HeaderRight text={'Procedi'} onPress={() => navigation.getParam('login', null)()} />
    ),
  };
};
