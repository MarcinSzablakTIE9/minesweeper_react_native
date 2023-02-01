import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated,{ useAnimatedStyle, useSharedValue, interpolateColor } from "react-native-reanimated";

const MinePool = (props) =>{
    const tab = props.pool.map(row => row.join(''));

    const loose = useSharedValue(false)

    const win = useSharedValue(props.mines)

    return(
        <GestureHandlerRootView>
            {tab.map((row, index) => (
                <View style={styles.row} key={index}>
                    {row.split('').map((cell, i) => {
                        const cellProgress = useSharedValue(0);

                        const cellPress = useSharedValue(0);

                        const tapGesture = Gesture.Tap().onStart(() => {
                            if(loose.value == false){
                                cellProgress.value = 1;
                                if(cell == 9){
                                    loose.value = true
                                    console.log(loose.value)
                                }
                            }
                        });

                        const pressGesture = Gesture.LongPress().onStart(() => {
                            if(cellPress.value == 0){
                                cellPress.value = 1
                            }
                            else{
                                cellPress.value = 0 
                            }
                        })

                        const animatedStyle = useAnimatedStyle(() => {
                            if(cellPress.value == 0){
                                const backgroundColor = interpolateColor(
                                    cellProgress.value,
                                    [0, 1],
                                    ['#97999c', '#fff']
                                );
                                const color =  interpolateColor(
                                    cellProgress.value,
                                    [0, 1],
                                    ['#97999c', '#000']
                                
                                )
                                return {
                                    backgroundColor,
                                    color
                                };
                            }
                            else{
                                const backgroundColor = interpolateColor(
                                    cellProgress.value,
                                    [0, 1],
                                    ['#97999c', 'red']
                                );
                                const color =  interpolateColor(
                                    cellProgress.value,
                                    [0, 1],
                                    ['#97999c', 'red']
                                
                                )
                                return {
                                    backgroundColor,
                                    color
                                };
                            };
                        });

                        return (
                            <GestureDetector key={[index, i]} gesture={Gesture.Race(pressGesture,tapGesture)}>
                                <Animated.Text style={[styles.cell, animatedStyle]}>
                                    {cell}
                                </Animated.Text>
                            </GestureDetector>
                        );
                    })}
                </View>
            ))}
        </GestureHandlerRootView>
    )
}
const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
    },
    cell:{
        textAlign:'center',
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:"#000",
    },
    cellHider:{
        paddingVertical:5,
        paddingHorizontal:10,
        alignContent:'center',
    }
})

export default MinePool;