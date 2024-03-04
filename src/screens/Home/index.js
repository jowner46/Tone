import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ActivityScreen from './Activity';
import RunScreen from './Run';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator  screenOptions={{
      tabBarLabelStyle:{color: Colors.tabsColor, fontWeight:"bold"}
     }}>
    <Tab.Screen name="Startarun" component={RunScreen} options={{
      tabBarLabel: "Start A Run",
      }}/>
    <Tab.Screen name="Activity" component={ActivityScreen}  options={{
      }}/>
  </Tab.Navigator>
  </NavigationContainer>
  )
}

export default HomeScreen