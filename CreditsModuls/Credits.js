import React,{useState} from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

const Credits = () => {
    const [letters] = useState("All project made by: Marcin Szablak / Jerz Tuptus".split(""));
    const [animations] = useState(letters.map(() => new Animated.Value(0)));
  
    const useEffect = () => {
      animations.forEach((animation, index) => {
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          delay: index * 70,
          useNativeDriver: true,
        }).start();
      });
    }
  
    useEffect()
  
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                {letters.map((letter, index) => {
                const animatedStyle = {
                    transform: [{
                    translateY: animations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [-1000, 0]
                    }),
                    }],
                };
        
                return (
                    <Animated.Text key={index} style={[styles.text, animatedStyle]}>
                    {letter}
                    </Animated.Text>
                );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e6e0b8',
        paddingVertical:100,
        paddingHorizontal:30,
    },
    view:{
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    text:{
        fontFamily: 'FredokaOne',
        fontSize:23,
    }
})

export default Credits;