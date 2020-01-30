import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'pink', height: 100}}>
        <Text>TeachIT</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'orange', height: 100}}>
      <Text> Box Goes Here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterDisplay: {
    height: 200,
    backgroundColor: 'pink',
    flex: 1,
    fontSize: 10,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'auto',
  }
});
