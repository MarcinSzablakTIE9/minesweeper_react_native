import React, { useState } from 'react';
import { Text, View, Animated } from 'react-native';

const TextAnimator = (props) => {
  const [letters] = useState(props.content.split(''));
  const [animations] = useState(letters.map(() => new Animated.Value(0)));

  const useEffect = () => {
    animations.forEach((animation, index) => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 1200,
        delay: index * 200,
        useNativeDriver: true,
      }).start();
    });
  }

  useEffect()

  return (
    <View style={styles.container}>
      {letters.map((letter, index) => {
        const animatedStyle = {
          transform: [{
            translateY: animations[index].interpolate({
              inputRange: [0, 1],
              outputRange: [-1000, 0]
            }),
          }],
        };

        return (
          <Animated.Text key={index} style={[props.style, animatedStyle]}>
            {letter}
          </Animated.Text>
        );
      })}
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
  },
};

export default TextAnimator;