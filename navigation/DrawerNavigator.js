import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home4 from '../screens/Home4'
import Home5 from '../screens/Home5'
import BotttomTabNavigator from './BottomTabNavigator'



const Drawer=createDrawerNavigator()
function DrawerNavigator () {
  return (
  
    <Drawer.Navigator>
        <Drawer.Screen name="home" component={BotttomTabNavigator}></Drawer.Screen>
        <Drawer.Screen name="home5" component={Home5}></Drawer.Screen>

    </Drawer.Navigator>

  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})