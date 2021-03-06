import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { isSmallDevice } from '../../../constants/Layout';
import GlobalTextInput from '../../../components/GlobalTextInput';
import HeaderRight from '../../../components/HeaderRight';
import { wait } from '../../../functions/wait';
import HeaderLeft from '../../../components/HeaderLeft';

function RegisterPage({ navigation }) {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [surnameError, setSurnameError] = useState<boolean>(false);
  let preinput = useRef<any>();
  let input = useRef<any>();

  useEffect(() => {
    wait(100).then(() => {
      preinput.current.focus();
    });
  }, []);

  useEffect(() => {
    navigation.setParams({ login });
  }, [name, surname]);

  const login = () => {
    if (name.length == 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (surname.length == 0) {
      setSurnameError(true);
    } else {
      setSurnameError(false);
    }
    if (name.length > 0 && surname.length > 0) {
      navigation.navigate('EmailPage', {
        user: { nome: name, cognome: surname },
      });
    }
  };

  return (
    <View style={styles.container}>
      <GlobalTextInput
        reference={preinput}
        label="Nome"
        value={name}
        hintError={nameError}
        hintText={'Empty field'}
        placeholder={'Nome'}
        onChangeText={(text) => setName(text)}
        onSubmitEditing={() => input.current.focus()}
      />
      <GlobalTextInput
        reference={input}
        label="Cognome"
        value={surname}
        hintError={surnameError}
        hintText={'Empty field'}
        placeholder={'Cognome'}
        onChangeText={(text) => setSurname(text)}
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

RegisterPage.navigationOptions = ({ navigation }) => {
  return {
    title: null,
    headerLeft: () => <HeaderLeft navigation={navigation}></HeaderLeft>,
    headerRight: () => (
      <HeaderRight text={'Procedi'} onPress={() => navigation.getParam('login', null)()} />
    ),
  };
};
export default RegisterPage;
