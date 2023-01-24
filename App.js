import { StyleSheet, View, StatusBar,SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Menu from './MenuModuls/Menu.js';

export default function App() {

  const [value, setValue] = useState(0);

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

  //zmiana ekranu

  const menuButtonOnPress = (data) => {
    setValue(data);
  }


  return (
    <SafeAreaView style={styles.container} >
      <StatusBar
        backgroundColor="#F7F6E7"
        translucent={true}
        barStyle="dark-content"
      />
      <Menu onCallback={menuButtonOnPress}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6E7',
  },
});
