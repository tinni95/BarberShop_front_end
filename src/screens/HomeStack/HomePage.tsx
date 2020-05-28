import React from 'react';
import { Image, View, StyleSheet, Platform } from 'react-native';
import RoundButtonEmptyLarge from '../../components/RoundButtonEmptyLarge';
import Colors from '../../constants/Colors';
import { isSmallDevice } from '../../constants/Layout';
import { Body, Bold } from '../../components/StyledText';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import { isOpened } from '../../functions/isOpened';

const BarberShop = gql`
  {
    barberShop(id:"1"){
    PhoneNumber
  	opening_times{
      OpeningTime
      CloseTime
      DayOfTheWeek
    }
  }
  }
`;

export const HomePage = ({ navigation: { navigate } }) => {

const {loading,data} = useQuery(BarberShop);
if(loading){
    return null
}
 
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo_full.png')}
          resizeMode="contain"
        />
        {isOpened(data.barberShop.opening_times)
        ?
        (<View style={{flexDirection:"row",alignItems:"center"}}>
            <Body>Opened</Body>
            <View style={styles.statusGreen}/>
        </View>):
        (<View style={{flexDirection:"row"}}>
            <Body>Closed</Body>
            <View style={styles.statusGrey}/>
        </View>)
        }
        <View style={{height:50}}></View>
        <Body style={{flexDirection:"row"}}>
            <Bold>Opening Times    </Bold>
            <Body>8.30 AM - 6.30 PM / Tuesday Closed </Body>
        </Body>
        <View style={{height:50}}></View>
        <Body style={{flexDirection:"row"}}>
            <Bold>Phone Number    </Bold>
            <Body>{data.barberShop.PhoneNumber} </Body>
        </Body>
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
    backgroundColor:"#FFFFFF",
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
    height: isSmallDevice ? 128:200,
    width: isSmallDevice ? 128:200,
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
  statusGreen: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    margin: 5,
    backgroundColor: 'lightgreen',
  },
  statusGrey: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    margin: 5,
    backgroundColor: 'grey',
  },
});

HomePage.navigationOptions = ({ navigation }) => {
  return {
    headerShown: false,
  };
};
