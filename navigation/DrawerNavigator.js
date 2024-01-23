import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BotttomTabNavigator from './BottomTabNavigator';
import CustomDrawerContent from '../components/customDrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen 
  name="home"
  component={BotttomTabNavigator}
  options={{
   headerShown:false,
    drawerItemStyle: {display: 'none'},
  }}
/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

const styles = StyleSheet.create({});
