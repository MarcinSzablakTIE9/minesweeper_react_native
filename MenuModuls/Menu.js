import React from "react";
import Title from "./Title";
import MenuButton from "./MenuButton";
import { View, Text, StyleSheet, Pressable } from "react-native";


const Menu = ({navigation}) =>{

    return(
        <View style={styles.menu}>
            <Title/>
            <View style={styles.menuButtons}>
                <MenuButton onPress={() => navigation.navigate("Game")}>Start</MenuButton>
                <MenuButton onPress={() => navigation.navigate("Credits")}>Credits</MenuButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuButtons:{
        marginTop:25,
    },
    menu:{
        flex: 1,
        backgroundColor: '#F7F6E7',
        paddingVertical:100,
        paddingHorizontal:30,
        alignItems: 'center',
    }
})

export default Menu;