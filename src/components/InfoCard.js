import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoCard = () => {
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const getCurrentInfo = () => {
      let today = new Date();
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let dayOfWeek = days[today.getUTCDay()];
      let date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
      let time = today.toLocaleTimeString();
      setDay(dayOfWeek);
      setDate(date);
      setTime(time);
      setCity('Stockholm');
    };
    getCurrentInfo();
  }, []);

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{day}</Text>
      <Text style={styles.cardText}>{date}</Text>
      <Text style={styles.cardText}>{time}</Text>
      <Text style={styles.cardText}>{city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: '#4B0082',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
  },
});

export default InfoCard;
