import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import createMinePool from "./CreateMinePool";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated,{ useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import MinePool from "./MinePool";
import ResetButton from "./ResetButton";

const {width, height} = Dimensions.get('window')

const Game = ({route}) =>{
    //minepool parametrs
    const pool = createMinePool(route.params.difficulty)
    
    //Pinch animation parametrs
    const scale = useSharedValue(route.params.scale);
    const savedScale = useSharedValue(route.params.scale);
    //Pan animation parametrs
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const context = useSharedValue({ x: 0, y: 0 })

    const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
        scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
        if (scale.value > 3){
            scale.value = 3
        } 
        savedScale.value = scale.value;
    });

    const panGesture = Gesture.Pan()
    .onStart(() => {
        context.value = {x: translateX.value, y: translateY.value}
    })
    .onChange((e) => {
        translateX.value = e.translationX + context.value.x
        translateY.value = e.translationY + context.value.y
    })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value }, 
            { scale: scale.value }
        ],
    }));

    const reset_values = () =>{
        scale.value = 1
        translateX.value = 0
        translateY.value = 0
    }

    return(
        <View style={[styles.container,{backgroundColor:route.params.color}]}>
            <GestureHandlerRootView>
                <GestureDetector gesture={Gesture.Simultaneous(panGesture,pinchGesture)}>
                    <Animated.View style={[styles.gesture, animatedStyle]}>
                        <MinePool pool={pool}/>
                    </Animated.View>
                </GestureDetector>    
            </GestureHandlerRootView>
            <ResetButton fun={reset_values}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F7F6E7',
        paddingVertical:'30%',
        alignItems:"center",
        flex:1
    },
    gameContainer:{
        padding:'30%',
        alignItems:"center"
    },
    gesture:{
        backgroundColor:'#cf0f0f',
        //padding:'10%'
    }

})


export default Game;