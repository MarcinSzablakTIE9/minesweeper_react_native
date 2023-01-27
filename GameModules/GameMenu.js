import React from "react";
import {View, Text, StyleSheet} from "react-native";
import GameButton from "./GameButtons";

const GameMenu = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Choose difficulty</Text>
            <View>
                <GameButton 
                    color={"#9aeda0"}
                    onPress={() => navigation.navigate("Game",{difficulty:[9,9,10],color:"#c9ffcc"})}>
                        Begginer
                </GameButton>
                <GameButton 
                    color={"#f2ea55"} 
                    onPress={() => navigation.navigate("Game",{difficulty:[16,16,40],color:"#feffad"})}>
                        intermediate
                </GameButton>
                <GameButton 
                    color={"#f25d55"} 
                    onPress={() => navigation.navigate("Game",{difficulty:[16,30,99],color:"#ffadad"})}>
                        Expert
                </GameButton>
                <View style={{marginTop:200, paddingHorizontal:100}}>
                    <GameButton color={"#bb83e6"} onPress={() => navigation.navigate("Tips")}>Tips</GameButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7F6E7',
        paddingVertical:100,
        paddingHorizontal:30,
    },
    text:{
        textAlign:'center',
        fontSize:35,
        fontFamily: 'FredokaOne',
        color:"#4a4a4a"
    },
})

export default GameMenu;