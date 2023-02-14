import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryButtons = (props) => {
  const { onPress } = props;
  return (
    <View style={styles.categoryButtonsContainer}>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => onPress('business')}
      >
        <Text style={styles.categoryButtonText}>Business</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => onPress('entertainment')}
      >
        <Text style={styles.categoryButtonText}>Entertainment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => onPress('health')}
      >
        <Text style={styles.categoryButtonText}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => onPress('science')}
      >
        <Text style={styles.categoryButtonText}>Science</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => onPress('sports')}
      >
        <Text style={styles.categoryButtonText}>Sports</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => onPress('technology')}
      >
        <Text style={styles.categoryButtonText}>Technology</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  categoryButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  categoryButtonText: {
    color: 'white',
  },
});

export default CategoryButtons;
