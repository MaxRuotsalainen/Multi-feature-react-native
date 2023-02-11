import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const WeatherComponent = () => {
  const [location, setLocation] = useState('Sweden');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9fe3b10eb3ab4475827125047231002&q=${location}&aqi=no`);
    const data = await response.json();
    setWeatherData(data);
  };

  const handleSubmit = () => {
    fetchWeather();
  };

  if (!weatherData) {
    return (
      <View>
        <Text>Loading weather data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
       <View style={styles.weatherContainer}>
        <Text style={styles.location}>Location: {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</Text>
      <Text style={styles.temperature}>Temperature: {weatherData.current.temp_c}°C</Text>
      <Text style={styles.condition}>Condition: {weatherData.current.condition.text}</Text>
      <Image
        style={styles.icon}
        source={{ uri: `https:${weatherData.current.condition.icon}` }}
      />
      </View>
      <TextInput
        value={location}
        onChangeText={text => setLocation(text)}
        placeholder="Enter location"
        style={styles.input}
      />
       <TouchableOpacity
          style={styles.closeButton}
          onPress={handleSubmit} >
          <Text style={styles.closeButtonText}>Sumbit</Text>
        </TouchableOpacity>
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1A3C',
    width: '100%',
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  temperature: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  condition: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    color: 'white',
  },
  closeButton: {
  
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 10,
    },
    closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    },
  weatherContainer: {
    alignItems: 'center',
    margin: 10,
  },
});

export default WeatherComponent;
