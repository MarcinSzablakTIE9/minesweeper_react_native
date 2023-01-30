import React from "react";
import Title from "./Title";
import MenuButton from "./MenuButton";
import { View, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Menu = ({navigation}) =>{
    return(
        <View style={styles.menu}>
            <View style={styles.menuScale}>
                <Title/>
                <View style={styles.menuButtons}>
                    <MenuButton onPress={() => navigation.navigate("GameMenu")}>Start</MenuButton>
                    <MenuButton onPress={() => navigation.navigate("Credits")}>Credits</MenuButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuButtons:{
        marginTop:'5%',
    },
    menu:{
        flex: 1,
        backgroundColor: '#F7F6E7',
        alignItems: 'center',
        paddingHorizontal:width/10,
    },
    menuScale:{
        alignItems: 'center',
    }
})

export default Menu;