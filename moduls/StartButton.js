import { View, Pressable, Text, StyleSheet} from 'react-native';

const StartButton = (props) =>{

    const onPress = () =>{
      console.log("sex")
    }

    return(
        <>  
            <Pressable style={styles.container} onPress={onPress} android_ripple={ {color:'#314E52', borderless: true}}>
                    <Text style={styles.text}>Start</Text>      
            </Pressable>
        </>
    )
};

const styles = StyleSheet.create({
    container:{
        textAlign:'center',
        paddingVertical:10,
        paddingHorizontal:70,
        backgroundColor:'#F2A154',
        borderRadius:30,
        shadowColor:'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius:5,
    },
    text: {
        color:'#314E52',
        fontSize:30,
        fontWeigh:'Bold',
        fontFamily:'RighteousRegular'
    },

})

export default StartButton;
