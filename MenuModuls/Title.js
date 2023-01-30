import { StyleSheet, Pressable, View } from "react-native";
import Animated, {useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence} from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import TextAnimator from './TextAnimator';

const { width, height } = Dimensions.get('window');

const Title = (props) =>{

    const spinValue = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => {
        return {
        transform: [{ rotateZ: `${spinValue.value}deg` }],
        };
    });

    const onPress = () => {
        spinValue.value = withSequence(
            withTiming(Math.random()*-360, { duration: 1000 }),
            withRepeat(withTiming(Math.random()*360, { duration: 1500 }), 1, true),
            withTiming(0, { duration: 2000 })
        );
    }

    return(
        <View style={styles.conteiner}>
            <TextAnimator
                content="Minesweeper"
                style={styles.text}/>
                
            <Pressable onPress={onPress}>
                <Animated.Image style={[styles.image, animatedStyle]} source={require('../assets/mina.png')}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({  
    conteiner:{
        paddingVertical:'10%',
        paddingHorizontal:'10%',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:(height/width)*25,
        fontFamily:'FredokaOne',
        color:'#4a4a4a',
        marginBottom:height/20,
    },
    image:{
        width:(height/width)*150,
        height:(height/width)*150,
    },
})

export default Title;