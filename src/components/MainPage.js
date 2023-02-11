import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Dice from './Dice';
import News from './News';
import Todo from './Todo';
import Cheatsheet from './Cheatsheet';
import Currency from './Currency';
import InfoCard from './InfoCard';
import Weather from './Weather';

const MainPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('None');

  return (
    <View style={styles.container}>
      {selectedComponent === 'None' && (
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem} onPress={() => setSelectedComponent('Weather')}>
            <Text style={styles.gridItemText}>Weather</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => setSelectedComponent('Dice')}>
            <Text style={styles.gridItemText}>Dice</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => setSelectedComponent('Todo')}>
            <Text style={styles.gridItemText}>Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => setSelectedComponent('News')}>
            <Text style={styles.gridItemText}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => setSelectedComponent('Currency')}>
            <Text style={styles.gridItemText}>Currency</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => setSelectedComponent('Cheatsheet')}>
            <Text style={styles.gridItemText}>Cheat Sheet</Text>
          </TouchableOpacity>
        </View>
      )}
      {selectedComponent === 'None' && (
        <View style={styles.cardContainer}>
          <InfoCard />
          
        </View>
      )}
      {selectedComponent === 'Dice' && <Dice />}
      {selectedComponent === 'Todo' && <Todo />}
      {selectedComponent === 'Currency' && <Currency />}
      {selectedComponent === 'Weather' && <Weather />}
      {selectedComponent === 'Cheatsheet' && <Cheatsheet />}
      {selectedComponent === 'News' && <News />}
      {selectedComponent !== 'None' && (
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setSelectedComponent('None')}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1E1A3C',
  },
  gridContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
  },
  gridItem: {
  width: '25.33%',
  aspectRatio: 1,
  margin: 10,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#6200ee',
      shadowColor: '#ffff',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 10,
  },
  gridItemText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
  },
  cardContainer: {
  width: '80%',


  borderRadius: 10,
  marginTop: 20,
  },
  cardText: {
  textAlign: 'center',
  color: '#6200ee',
  fontWeight: 'bold',
  fontSize: 20,
  },
  closeButton: {
  position: 'absolute',
  top: 40,
  left: 20,
  backgroundColor: '#6200ee',
  padding: 10,
  borderRadius: 10,
  },
  closeButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
  },
  });
  export default MainPage;