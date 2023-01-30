import { View, Pressable, Text, StyleSheet} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence} from 'react-native-reanimated' 
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const MenuButton = (props) =>{

  const rotation = useSharedValue(0);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  const animation = () =>{
    rotation.value = withSequence(
      withTiming(Math.random()*-2, { duration: Math.random()* 50 }),
      withRepeat(withTiming(Math.random()*2, { duration: 600 }), false, true),
    );
  }
  animation()

  return(
      <Pressable onPress={props.onPress} style={{marginTop:height/25}}>
        <Animated.View style={[styles.container, animatedStyle]}>
          <Text style={styles.text}>{props.children}</Text>  
        </Animated.View>    
      </Pressable>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingVertical:height/80,
        paddingHorizontal:width/10,
        backgroundColor:'#ebad73',
        borderRadius:10000,
    },
    text: {
        color:'#4a4a4a',
        fontSize:(height/width)*20,
        fontFamily: 'FredokaOne',
    },
})

export default MenuButton;
