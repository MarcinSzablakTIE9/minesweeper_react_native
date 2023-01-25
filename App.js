import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './MenuModuls/Menu';
import GameScreen from './GameModules/GameScreen';
import Credits from './CreditsModuls/Credits';

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
        <Stack.Screen name="Game" component={GameScreen}/>
        <Stack.Screen name="Credits" component={Credits}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}