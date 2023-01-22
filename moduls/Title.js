import { StyleSheet, Pressable } from "react-native";
import Animated, {useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence} from 'react-native-reanimated';

import TextAnimator from './TextAnimator';

const Title = (props) =>{

    const spinValue = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => {
        return {
        transform: [{ rotateZ: `${spinValue.value}deg` }],
        };
    });

    const onPress = () => {
        spinValue.value = withSequence(
            withTiming(Math.random()*-360, { duration: 1000 }),
            withRepeat(withTiming(Math.random()*360, { duration: 1500 }), 1, true),
            withTiming(0, { duration: 2000 })
        );
    }

    return(
        <>
            <TextAnimator
                content="Minesweeper"
                style={styles.text}/>
                
            <Pressable onPress={onPress}>
                <Animated.Image style={[styles.image, animatedStyle]} source={require('../assets/mina.png')}/>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({  
    text:{
        fontSize:50,
        fontFamily:'FredokaOne',
        color:'#314E52',
    },
    image:{
        marginTop:100,
        width:200,
        height:200,
    },
})

export default Title;