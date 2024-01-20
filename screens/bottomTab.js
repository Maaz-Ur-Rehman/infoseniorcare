import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './home';
import { FontAwesome } from '@expo/vector-icons';

import Home1 from './home1';
import Home2 from './home2';
import Home3 from './home3';


const Tab = createBottomTabNavigator()
const BotttomTab = () => {
  return (

    <Tab.Navigator
      screenOptions={{


        tabBarStyle: {

          height: 60,
          backgroundColor: 'black',
          borderTopLeftRadius: 43,
          borderTopRightRadius: 43,


        },
      }}
      initialRouteName="Feed"
      activeColor="#e91e63"
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="home" color="white" size={24} />
          ),


          headerShown: false,
          tabBarLabel: ""
        }}
      />


      <Tab.Screen
        name="home1"
        component={Home1}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="home" color="white" size={24} />
          ),

          tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'black',
          },
          headerShown: false,
          tabBarLabel: ""
        }}
      />
      <Tab.Screen
        name="home2"
        component={Home2}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="search" color="white" size={24} />
          ),

          headerShown: false,
          tabBarLabel: ""
        }}
      />
      <Tab.Screen
        name="home3"
        component={Home3}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="home" color="white" size={24} />
          ),

          // tabBarOptions: {
          //   activeTintColor: 'white', 
          //   inactiveTintColor: 'white', 
          // },
          headerShown: false,
          tabBarLabel: ""
        }}
      />
    </Tab.Navigator>

  );
}

export default BotttomTab

const styles = StyleSheet.create({})