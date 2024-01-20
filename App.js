import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import SplashScreens from './screens/splashScreens';
import useFonts from './hooks/useFonts';
import WelcomeScreen1 from './screens/welcomeScreen1';
import WelcomeScreen2 from './screens/welcomeScreen2';
import WelcomeScreen3 from './screens/welcomeScreen3';
import WelcomeScreen4 from './screens/welcomeScreen4';
import Home from './screens/home';
import BotttomTab from './screens/bottomTab';
import DrawerNavigation from './screens/Drawer';

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);


  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator >
        
      {/* <Stack.Screen
          startAsync={LoadFonts}
          // name="splashScreen"
          name="drawer"
          component={DrawerNavigation}
          options={{ headerShown: false }}
          onLayout={onLayoutRootView}
        /> */}

        <Stack.Screen
          startAsync={LoadFonts}
          // name="splashScreen"
          name="bottom"
          component={BotttomTab}
          options={{ headerShown: false }}
          onLayout={onLayoutRootView}
        />
        <Stack.Screen
          name="welcomeScreen1"
          component={WelcomeScreen1}
          options={{ headerShown: false }}
          onLayout={onLayoutRootView}
        />
        <Stack.Screen
          name="welcomeScreen2"
          component={WelcomeScreen2}
          options={{ headerShown: false }}
          onLayout={onLayoutRootView}
        />
        <Stack.Screen
          name="welcomeScreen3"
          component={WelcomeScreen3}
          options={{ headerShown: false }}
          onLayout={onLayoutRootView}
        />
        <Stack.Screen
          name="welcomeScreen4"
          component={WelcomeScreen4}
          options={{ headerShown: false }}
          onLayout={onLayoutRootView}
        />
        {/* <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
          onLayout={onLayoutRootView}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
