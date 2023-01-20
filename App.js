import { StyleSheet, Text, View } from 'react-native';
import StartButton from './moduls/StartButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StartButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
