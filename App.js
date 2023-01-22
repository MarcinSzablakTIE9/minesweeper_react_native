import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useRef,useCallback, useState } from 'react';

import SystemNavigationBar from 'react-native-system-navigation-bar';

//import * as SplashScreen from 'expo-splash-screen';
import StartButton from './moduls/StartButton';
import Title from './moduls/Title';

//SplashScreen.preventAutoHideAsync();

SystemNavigationBar.navigationHide();

export default function App() {

  // font
  const [fontsLoaded] = useFonts({
    'RighteousRegular': require('./assets/fonts/Righteous-Regular.ttf'),
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
            <StartButton/>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6E7',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 100,
  },
});
