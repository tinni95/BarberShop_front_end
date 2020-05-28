import React from 'react';
import { Image, View, StyleSheet, Platform } from 'react-native';
import RoundButtonEmptyLarge from '../../components/RoundButtonEmptyLarge';
import Colors from '../../constants/Colors';
import { isSmallDevice } from '../../constants/Layout';

export const HomePage = ({ navigation: { navigate } }) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <RoundButtonEmptyLarge
          bgColor={Colors.primary}
          textColor={Colors.black}
          color={Colors.primary}
          onPress={() => navigate('TimePage')}
          text="Book Now"
        />
        <View style={{ height: 20 }}></View>
        <RoundButtonEmptyLarge
          color={Colors.black}
          textColor={'white'}
          bgColor={Colors.black}
          onPress={() => navigate('ProfilePage')}
          text="Profile"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
          height: 3,
          width: 0,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 8,
  },
  logo: {
    alignItems: 'center',
    height: 128,
    width: 128,
  },
  heading: {
    color: 'white',
    fontSize: 26,
    marginBottom: isSmallDevice ? 100 : 50,
  },
  buttonsWrapper: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

HomePage.navigationOptions = ({ navigation }) => {
  return {
    headerShown: false,
  };
};
