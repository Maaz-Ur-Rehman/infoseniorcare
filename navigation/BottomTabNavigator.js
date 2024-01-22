import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import Home from './home';
import { FontAwesome } from '@expo/vector-icons';

import Home1 from '../screens/home1';
import Home2 from '../screens/home2';
import Home3 from '../screens/home3';
import DrawerNavigator from './DrawerNavigator';
import HomeScreen from '../screens/HomeScreen';
import Home from '../screens/home';


const Tab = createBottomTabNavigator()
const BotttomTabNavigator = () => {
  return (

    <Tab.Navigator
      screenOptions={{


        tabBarStyle: {

          height: 65,
          paddingTop: 5,
          backgroundColor: 'black',
          borderTopLeftRadius: 43,
          borderTopRightRadius: 43,


        },
      }}
    //   initialRouteName="home"
      activeColor="#e91e63"
    >
      
        <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? 'white' : 'black',
                padding: 10,
                borderRadius: 200,
              }}
            >
              <FontAwesome name="search" color={color} size={24} />
            </View>
          ),
          // tabBarOptions: {
          //   activeTintColor: 'white',
          //   inactiveTintColor: 'white',
          // },
          headerShown: false,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="home1"
        component={Home1}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? 'white' : 'black',
                padding: 10,
                borderRadius: 200,
              }}
            >
              <FontAwesome name="search" color={color} size={24} />
            </View>
          ),
          // tabBarOptions: {
          //   activeTintColor: 'white',
          //   inactiveTintColor: 'white',
          // },
          headerShown: false,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="home2"
        component={Home2}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? 'white' : 'black',
                padding: 10,
                borderRadius: 200,
              }}
            >
              <FontAwesome name="home" color={color} size={24} />
            </View>
          ),
          // tabBarOptions: {
          //   activeTintColor: 'white',
          //   inactiveTintColor: 'white',
          // },
          headerShown: false,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="home3"
        component={Home3}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? 'white' : 'black',
                padding: 10,
                borderRadius: 200,
              }}
            >
              <FontAwesome name="home" color={color} size={24} />
            </View>
          ),
          // tabBarOptions: {
          //   activeTintColor: 'white',
          //   inactiveTintColor: 'white',
          // },
          headerShown: false,
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>

  );
}

export default BotttomTabNavigator

const styles = StyleSheet.create({})