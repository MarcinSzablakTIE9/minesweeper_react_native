import { View, Pressable, Text, StyleSheet} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence} from 'react-native-reanimated' 

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
    <>  
      <Pressable >
        <Animated.View style={[styles.container, animatedStyle]}>
          <Text style={styles.text}>{props.children}</Text>  
        </Animated.View>    
      </Pressable>
    </>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:50,
        backgroundColor:'#F2A154',
        borderRadius:30,
        shadowColor:'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius:5,
        marginTop:40
    },
    text: {
        color:'#314E52',
        fontSize:30,
        fontFamily: 'FredokaOne',
    },
})

export default MenuButton;