import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useRef,useCallback, useState } from 'react';

import * as SplashScreen from 'expo-splash-screen';

import MenuButton from './moduls/MenuButton';
import Title from './moduls/Title';

export default function App() {
  // font
  const [fontsLoaded] = useFonts({
    'FredokaOne': require('./assets/fonts/FredokaOne-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
          <View style={styles.container} >
            <Title/>
            <View style={styles.menuButtons}>
              <MenuButton>Start</MenuButton>
              <MenuButton>Credits</MenuButton>
            </View>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6E7',
    alignItems: 'center',
    paddingVertical:100,
    paddingHorizontal:30,
  },
  menuButtons:{
    marginTop:120,
  },
});
