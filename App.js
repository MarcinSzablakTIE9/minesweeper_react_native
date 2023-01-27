import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './MenuModuls/Menu';
import GameMenu from './GameModules/GameMenu';
import Credits from './CreditsModuls/Credits';
import Tips from './GameModules/Tips/Tips';
import Game from './GameModules/ActuallGame/Game';

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Menu'>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="GameMenu" component={GameMenu}/>
        <Stack.Screen name="Credits" component={Credits}/>
        <Stack.Screen name="Tips" component={Tips}/>
        <Stack.Screen name="Game" component={Game}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}