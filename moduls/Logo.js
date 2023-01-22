import React from 'react';
import { Pressable, StyleSheet, Image} from 'react-native';

const Logo = (props) =>{

    const onPress = () =>{
        console.log("sex2")
    }

    return(
        <>
            
            <Pressable onPress={onPress}>
                <Image style={styles.image} source={require('../assets/mina.png')}/>
            </Pressable>
        </>
    )
};

const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 200,
    },
})

export default Logo;
