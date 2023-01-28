import { View, Pressable, Text, StyleSheet} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence} from 'react-native-reanimated' 
import { moderateScale } from '../assets/Metrics';

const GameButton = (props) =>{

  const rotation = useSharedValue(0);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  const animation = () =>{
    rotation.value = withSequence(
      withTiming(Math.round(Math.random()*2), { duration: Math.random()* 50 }),
      withRepeat(withTiming(Math.round(Math.random()*-2), { duration: 600 }), false, true),
    );
  }
  animation()

  return(
      <Pressable onPress={props.onPress} style={{marginTop:40}}>
        <Animated.View style={[styles.container, {backgroundColor:props.color}, animatedStyle]}>
          <Text style={styles.text}>{props.children}</Text>  
        </Animated.View>    
      </Pressable>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingVertical:'5%',
        paddingHorizontal:'10%',
        borderRadius:100000,
    },
    text: {
        color:'#4a4a4a',
        fontSize:moderateScale(30),
        fontFamily: 'FredokaOne',
    },
})

export default GameButton;
