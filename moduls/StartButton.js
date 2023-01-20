import { View, Animated, Pressable, Text, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import { useRef } from 'react';

const StartButton = (props) =>{
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      };    

    useFonts({
        'BebasNeue': require('../assets/fonts/BebasNeue-Regular.ttf'),
    });

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
    },
    text: {
        color:'#314E52',
        fontSize:100,
        fontFamily:'BebasNeue',
        textShadowColor: '#314E52',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 0,
    },

})

export default StartButton;
