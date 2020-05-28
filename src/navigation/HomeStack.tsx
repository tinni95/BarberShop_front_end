import { createAppContainer } from 'react-navigation';
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

export default createAppContainer(AppNavigator);
