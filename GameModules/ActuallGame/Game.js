import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import createMinePool from "./MinePool";

const Game = ({route}) =>{
    const pool = createMinePool(route.params.difficulty)
    const tab = pool.map(row => row.join(''));
    return(
        <View style={[styles.container,{backgroundColor:route.params.color}]}>
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
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7F6E7',
        paddingVertical:100,
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