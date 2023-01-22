import React from "react";
import { Text, Image, StyleSheet } from "react-native";

const Title = (props) =>{

    return(
        <>
            <Text>
                Minesweepe
                <Image style={styles.image} source={require('../assets/mina.png')}/>
                r
            </Text> 
        </>
    )
}

const styles = StyleSheet.create({
    
    image:{
        width:100,
        height:100
    },
})

export default Title;