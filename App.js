import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import useFonts from './hooks/useFonts';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux'
import { store } from './store';



export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  // LoadFonts()
  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
}
