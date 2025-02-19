import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [index, setIndex] = useState(0)

  const handleIncrease = () => {
    setIndex(index + 1)
  }
  const handleDecrease = () => {
    setIndex(index - 1)
  }
  return (
    <View style={styles.container}>
        <Text style={styles.counterText}>{index}</Text>
        <View style={styles.backgroundButton}>
          <Button onPress={handleIncrease} title='Increase' color='red'/>
        </View>
        <View style={styles.backgroundButton}>
         <Button onPress={handleDecrease} title='Decrease' />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'

  },
  counterText: {
    color: '#000',
    fontSize: 30
  },
  backgroundButton: {
    backgroundColor: 'green',
    padding: 10,
    width: 200,
    marginBottom: 10
  }


});
