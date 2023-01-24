import { StyleSheet, View } from 'react-native';
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
      <View style={styles.container} >
        <Menu onCallback={menuButtonOnPress}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6E7',
  },
});
