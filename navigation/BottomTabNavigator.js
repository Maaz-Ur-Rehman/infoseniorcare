import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// import Home from './home';

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
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center', // Center the icons horizontally
            }}>

            <View
              style={{
                paddingBottom: focused ? 8 : 0,
                borderRadius: 200,
              }}
              >
              <AntDesign
                name="home"
                size={24}
                color={focused ? "rgba(255, 212, 1, 1)" : "#fff"}
              />
            </View>
            {focused && (
                <View style={{ backgroundColor: "rgba(255, 212, 1, 1)", height: 5, width:5,borderRadius:10 }}></View>

              )}
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
          tabBarIcon: ({ focused }) => (
            <View  style={{
              alignItems: 'center', // Center the icons horizontally
            }}>
            <View
              style={{
                paddingBottom: focused ? 8 : 0,
                borderRadius: 200,
              }}
            >
              <FontAwesome
                name="search"
                size={24}
                color={focused ? "rgba(255, 212, 1, 1)" : "#fff"}
              />
            </View>
            {focused && (
                <View style={{ backgroundColor: "rgba(255, 212, 1, 1)", height: 5, width:5,borderRadius:10 }}></View>

              )}
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
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center', // Center the icons horizontally
              }}
            >
              <View
                style={{
                  paddingBottom: focused ? 8 : 0,
                  borderRadius: 200,
                }}
              >
                <Fontisto
                  name="favorite"
                  size={24}
                  color={focused ? "rgba(255, 212, 1, 1)" : "#fff"}
                />
              </View>
              {focused && (
                <View style={{ backgroundColor: "rgba(255, 212, 1, 1)", height: 5, width:5,borderRadius:10 }}></View>

              )}
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
          tabBarIcon: ({ focused }) => (
            <View  style={{
              alignItems: 'center', // Center the icons horizontally
            }} >
            <View
              style={{
                paddingBottom: focused ? 8: 0,
                borderRadius: 200,
              }}
            >
             
              <Entypo name="location" size={24} color={focused ? "rgba(255, 212, 1, 1)" : "#fff"} />
            </View>
            {focused && (
                <View style={{ backgroundColor: "rgba(255, 212, 1, 1)", height: 5, width:5,borderRadius:10 }}></View>

              )}
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