import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import createMinePool from "./CreateMinePool";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated,{ useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import MinePool from "./MinePool";

const {width, height} = Dimensions.get('window')

const Game = ({route}) =>{
    //minepool parametrs
    const size = route.params.difficulty
    const pool = createMinePool(size)
    
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

    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={[
                styles.container,
                {backgroundColor:route.params.color}
            ]}>
                <GestureDetector gesture={Gesture.Simultaneous(panGesture,pinchGesture)}>
                    <Animated.View style={animatedStyle}>
                        <MinePool pool={pool}/>
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
})


export default Game;