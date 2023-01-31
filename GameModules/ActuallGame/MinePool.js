import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

const MinePool = (props) =>{
    const tab = props.pool.map(row => row.join(''));
    return(
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
    )
}
const styles = StyleSheet.create({
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

export default MinePool;