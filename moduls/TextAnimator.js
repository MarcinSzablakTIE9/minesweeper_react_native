import React from "react";
import {Text, View, StyleSheet, Animated} from 'react-native';
import { useSharedValue, withTiming, withRepeat, withSequence, useAnimatedStyle } from "react-native-reanimated";


const TextAnimator = (props) =>{
    const animatedValues = [];

    const textArr = props.content.trim().split('');

    const spinValue = useSharedValue(0)

    textArr.forEach((_, i) => {
        animatedValues[i] = new Animated.Value(0);
    });

    const animated = useAnimatedStyle(() => {
        const animations = textArr.map((_, i) => {
            return Animated.timing(animatedValues[i],{
                transform: [{ rotateZ: `${spinValue.value}deg` }]
            })
        })
    })

    const animation = () =>{
        spinValue.value = withSequence(
          withTiming(Math.random()*-360, { duration: Math.random()* 50 }),
          withRepeat(withTiming(Math.random()*360, { duration: 600 }), false, true),
        );
      }
      
    animation()

    return(
        <View style={styles.wrapper}>
            {textArr.map((word, index) => {
                return (
                    <Animated.Text key={`${word}-${index}`} style={[props.style, animatedValues[index]]}>
                        {word}
                    </Animated.Text>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})

export default TextAnimator;