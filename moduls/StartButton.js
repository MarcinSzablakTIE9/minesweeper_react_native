import { View, Animated, Pressable, Text, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import { useRef,useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

const StartButton = (props) =>{
    //animacja

    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      };    

    // Font 

    const [fontsLoaded] = useFonts({
        'RighteousRegular': require('../assets/fonts/Righteous-Regular.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    //Przycisk
    return(
        <>
            <Pressable onPress={fadeOut}>
                <Animated.View style={[styles.container,{opacity:fadeAnim}]} android_ripple={ {color:'#314E52'}}>
                    <Text style={styles.text}>Start</Text>
                </Animated.View>
            </Pressable>
        </>
    )
};

const styles = StyleSheet.create({
    container:{
        textAlign:'center',
        paddingVertical:10,
        paddingHorizontal:70,
        backgroundColor:'#F2A154',
        borderRadius:30,
        shadowColor:'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius:5,
    },
    text: {
        color:'#314E52',
        fontSize:100,
        fontWeigh:'Bold',
        fontFamily:'RighteousRegular',
    },

})

export default StartButton;
