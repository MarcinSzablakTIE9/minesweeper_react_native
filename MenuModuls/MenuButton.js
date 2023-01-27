import { View, Pressable, Text, StyleSheet} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence} from 'react-native-reanimated' 
import { horizontalScale, verticalScale, moderateScale } from "../assets/Metrics";

const MenuButton = (props) =>{

  const rotation = useSharedValue(0);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  const animation = () =>{
    rotation.value = withSequence(
      withTiming(Math.round(Math.random()*-2), { duration: Math.random()* 50 }),
      withRepeat(withTiming(Math.round(Math.random()*2), { duration: 600 }), false, true),
    );
  }
  animation()

  return(
      <Pressable onPress={props.onPress} style={{marginTop:horizontalScale(60)}}>
        <Animated.View style={[styles.container, animatedStyle]}>
          <Text style={styles.text}>{props.children}</Text>  
        </Animated.View>    
      </Pressable>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingVertical:verticalScale(20),
        paddingHorizontal:horizontalScale(60),
        backgroundColor:'#ebad73',
        borderRadius:30,
    },
    text: {
        color:'#4a4a4a',
        fontSize:verticalScale(100),
        fontFamily: 'FredokaOne',
    },
})

export default MenuButton;
