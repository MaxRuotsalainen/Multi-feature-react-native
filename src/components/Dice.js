import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';


import Dice1 from '../images/dice1.png';
import Dice2 from '../images/dice2.png';
import Dice3 from '../images/dice3.png';
import Dice4 from '../images/dice4.png';
import Dice5 from '../images/dice5.png';
import Dice6 from '../images/dice6.png';

const App = ()=>{

  const [uri,setUri] = useState(Dice1);
const [scaleValue] = useState(new Animated.Value(1));
const [rotateValue] = useState(new Animated.Value(0));

const buttonTapped = () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  switch (randomNumber) {
    case 1:
      setUri(Dice1);
      break;
    case 2:
      setUri(Dice2);
      break;
    case 3:
      setUri(Dice3);
      break;
    case 4:
      setUri(Dice4);
      break;
    case 5:
      setUri(Dice5);
      break;
    case 6:
      setUri(Dice6);
      break;
    default:
      setUri(Dice1);
  }

  Animated.sequence([
    Animated.timing(scaleValue, {
      toValue: 1.2,
      duration: 150,
      useNativeDriver: true,
    }),
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    
    }),
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }),
  ]).start(() => {
    rotateValue.setValue(0);
  });
};

  return(
    <View style={styles.container}>
      
    <Animated.Image
      style={[
        styles.image,
        { transform: [{ scale: scaleValue }, { rotate: rotateValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }] },
      ]}
      source={uri}
    />
    <TouchableOpacity onPress={buttonTapped}>
      <Text style={styles.texts}>Roll the Dice</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  image:{
    width:200,
    height:200,
    tintColor: 'white',
    transform: [{ matrix: [1, 0, 0, 1, 0, 0, 0, 0, -1] }],
    shadowColor: '#663399',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  texts:{
    fontSize:26,
    color:'#6200ee',
    marginTop: 30,
    fontStyle: 'italic',
    paddingHorizontal: 10,
    borderColor: '#6200ee',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
    shadowColor: '#663399',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  }
});

export default App;
