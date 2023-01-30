import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import createMinePool from "./MinePool";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated,{ useAnimatedStyle, useSharedValue } from "react-native-reanimated";


const Game = ({route}) =>{

    const pool = createMinePool(route.params.difficulty)
    const tab = pool.map(row => row.join(''));

    const scale = useSharedValue(route.params.scale);
    const savedScale = useSharedValue(route.params.scale);

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const context = useSharedValue({ x: 0, y: 0 })

    const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });
  
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value }, 
            { scale: scale.value }
        ],
    }));

    const panGesture = Gesture.Pan()
    .onStart(() => {
        context.value = {x: translateX.value, y: translateY.value}
    })
    .onChange((e) => {
        translateX.value = e.translationX + context.value.x
        translateY.value = e.translationY + context.value.y
    })

    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={[
                styles.container,
                {backgroundColor:route.params.color}
            ]}>
                <GestureDetector gesture={Gesture.Simultaneous(panGesture,pinchGesture)}>
                    <Animated.View style={animatedStyle}>
                        <View style={{backgroundColor:'#fff'}}>
                            {tab.map((row, index) => (
                                <View style={styles.row} key={index}>
                                    {row.split('').map((cell, i) => (
                                        <Pressable key={[index,i]} style={styles.cell}>
                                            <Text>{cell}</Text>
                                        </Pressable>
                                    ))}
                                </View>
                                ))}
                        </View>
                    </Animated.View>
                </GestureDetector>
            </View>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7F6E7',
        paddingVertical:'30%',
        alignItems:"center"
    },
    row:{
        flexDirection: 'row',
    },
    cell:{
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:"#000",
        backgroundColor:"#ffffff",
    }
})


export default Game;