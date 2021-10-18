import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import MyStackNavigator from './Navigation/MyStackNavigator';
import Home from './screen/Home';
import MyDrawer from './Navigation/MyDrawerNavigator';
export default function App() {
  return (
    <NavigationContainer>
      {/* <MyStackNavigator /> */}
      {/* <Home></Home> */}
      <MyDrawer />
    </NavigationContainer>
  );
}
