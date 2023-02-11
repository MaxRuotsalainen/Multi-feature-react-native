import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const MainPage = () => {
    const [selectedComponent, setSelectedComponent] = useState('None');

   
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateToFeature('Weather')}>
          <Text>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateToFeature('Dice')}>
          <Text>Dice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateToFeature('Todo')}>
          <Text>Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateToFeature('News')}>
          <Text>News</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateToFeature('Currency')}>
          <Text>Currency</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateToFeature('Cheatsheet')}>
          <Text>Cheatsheet</Text>
        </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
  },
});
export default MainPage;