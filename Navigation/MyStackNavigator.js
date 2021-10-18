import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
const Stack = createStackNavigator();

export default function StackNavigator({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}
function Notifications({navigation}) {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
}
