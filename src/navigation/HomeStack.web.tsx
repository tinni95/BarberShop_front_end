import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation-stack';
import {
    HomePage,
    TimePage,
    ProfilePage,
    ServicePage,
  } from '../screens/HomeStack';
  
  const AppNavigator = createStackNavigator({
    HomePage,
    TimePage,
    ProfilePage,
    ServicePage,
  });
  
export default createBrowserApp(AppNavigator, { history: 'hash' });
