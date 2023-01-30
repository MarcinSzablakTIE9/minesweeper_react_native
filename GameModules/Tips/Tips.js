import React from "react";
import { View, Text, Image } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";

const Tips = ({navigation}) =>{

    const tap = Gesture.Pinch().onStart(() =>{
        console.log('aaa')
    })

    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
            <GestureDetector gesture={tap}>
                <View style={{flex:1, backgroundColor:'#000', margin:100}}></View>
            </GestureDetector>
        </GestureHandlerRootView>
    )
}

export default Tips;