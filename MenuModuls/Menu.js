import React from "react";
import Title from "./Title";
import MenuButton from "./MenuButton";
import { View, StyleSheet } from "react-native";

const Menu = (props) =>{
    return(
        <View style={styles.menu}>
            <Title/>
            <View style={styles.menuButtons}>
                <MenuButton onCallback={props.onCallback} value={1}>Start</MenuButton>
                <MenuButton onCallback={props.onCallback} value={2}>Credits</MenuButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuButtons:{
        marginTop:50,
    },
    menu:{
        paddingVertical:100,
        paddingHorizontal:30,
        alignItems: 'center',
    }
})

export default Menu;