import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";

const styles = {
  fullNewsContainer: {
    padding: 10,
  },
  fullNewsTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    color: 'white',
  },
  fullNewsDescription: {
    fontSize: 16,
    marginVertical: 10,
    color: 'white',
  },
  fullNewsSource: {
    fontSize: 14,
    marginVertical: 10,
    color: 'gray',
  },
  fullNewsAuthor: {
    fontSize: 14,
    marginVertical: 10,
    color: 'gray',
  },
  fullNewsPublishedAt: {
    fontSize: 14,
    marginVertical: 10,
    color: 'gray',
  },
  fullNewsImage: {
    width: '100%',
    height: 150,
  },
};

const FullNews = (props) => {
    const { selectedNews } = props;
    return (
      <>
        {selectedNews.urlToImage && (
          <Image
            source={{ uri: selectedNews.urlToImage }}
            style={styles.fullNewsImage}
          />
        )}
        <View style={styles.fullNewsContainer}>
          <Text style={styles.fullNewsTitle}>{selectedNews.title}</Text>
          <Text style={styles.fullNewsDescription}>{selectedNews.content}</Text>
          {selectedNews.source && (
            <Text style={styles.fullNewsSource}>{selectedNews.source.name}</Text>
          )}
          {selectedNews.author && (
            <Text style={styles.fullNewsAuthor}>Author: {selectedNews.author}</Text>
          )}
          <Text style={styles.fullNewsPublishedAt}>{selectedNews.publishedAt}</Text>
        </View>
      </>
    );
  };

export default FullNews;
