import { Pressable, Text, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ResetButton = (props) =>{
    return(
        <Pressable style={styles.button} onPress={props.fun}>
            <Text style={styles.text}>Fix position</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        position:'absolute',
        top:width*1.5,
        alignItems:'center',
        paddingVertical:'5%',
        paddingHorizontal:'10%',
        borderRadius:100000,
        backgroundColor:'#fff',
    },
    text:{
        fontFamily: 'FredokaOne',
        top:width/36,
        fontSize:(height/width)*15,
        justifyContent:'center'
    }
})
export default ResetButton;