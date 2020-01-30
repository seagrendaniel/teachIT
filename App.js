import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
    <View style={styles.header}>
      <Text style={styles.letterDisplay}>TeachIT</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    // flex: 1
    // backgroundColor: 'pink'
  },
  letterDisplay: {
    fontSize: 30,
    fontWeight: 'bold',
    // fontFamily: ''
  }
});
