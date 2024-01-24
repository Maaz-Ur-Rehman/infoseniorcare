import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import WelcomeScreen1 from '../screens/welcomeScreen1'
import WelcomeScreen2 from '../screens/welcomeScreen2'
import WelcomeScreen3 from '../screens/welcomeScreen3'
import WelcomeScreen4 from '../screens/welcomeScreen4'
import SplashScreens from '../screens/splashScreens'
import Home1 from '../screens/home1';
import DrawerNavigator from './DrawerNavigator';
import BotttomTabNavigator from './BottomTabNavigator';
import NotificationScreen from '../screens/NotificationScreen';
import Start from '../screens/Start';
import Login from '../screens/Login';
const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="splashScreen"
                component={SplashScreens}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="home"
                component={DrawerNavigator}
                options={{ headerShown: false }}
            // onLayout={onLayoutRootView}
            />

            <Stack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{ headerShown: false }}
            // onLayout={onLayoutRootView}
            />
            <Stack.Screen
                name="start"
                component={Start}
                options={{
                    title: '',
                }}
            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown:false
                }}
                
            />


            <Stack.Screen
                name="welcomeScreen1"
                component={WelcomeScreen1}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="welcomeScreen2"
                component={WelcomeScreen2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="welcomeScreen3"
                component={WelcomeScreen3}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="welcomeScreen4"
                component={WelcomeScreen4}
                options={{ headerShown: true }}
            />

        </Stack.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})