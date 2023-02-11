import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Button } from "react-native";
import { useState, useEffect } from "react";
import { Card } from "react-native-paper";



const CategoryButtons = ({ onPress }) => (
  <View style={styles.categoryButtonContainer}>
    <TouchableOpacity style={{ marginHorizontal: 10, padding: 10, backgroundColor: "lightblue", borderRadius: 5 }} onPress={() => onPress("business")}>
      <Text  style={styles.categoryButton}>Business</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ marginHorizontal: 10, padding: 10, backgroundColor: "lightblue", borderRadius: 5 }} onPress={() => onPress("sports")}>
      <Text style={{ fontWeight: "bold", color: "white" }}>Sports</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ marginHorizontal: 10, padding: 10, backgroundColor: "lightblue", borderRadius: 5 }} onPress={() => onPress("music")}>
      <Text style={{ fontWeight: "bold", color: "white" }}>Music</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ marginHorizontal: 10, padding: 10, backgroundColor: "lightblue", borderRadius: 5 }} onPress={() => onPress("news")}>
      <Text style={{ fontWeight: "bold", color: "white" }}>News</Text>
    </TouchableOpacity>
  </View>
);

const News = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("General");
  console.log(data);

  const getArticles = () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=1f804abc9bf5432db60cbe929928d81f`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getArticles();
  }, [selectedCategory]);

  return (
 
      <ScrollView style={styles.container}>
      <View style={styles.categoryButtonContainer}>
        <TouchableOpacity 
          style={styles.categoryButton}
          onPress={() => setSelectedCategory("business")}
        >
          <Text style={styles.categoryButtonText}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.categoryButton}
          onPress={() => setSelectedCategory("sports")}
        >
          <Text style={styles.categoryButtonText}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.categoryButton}
          onPress={() => setSelectedCategory("music")}
        >
          <Text style={styles.categoryButtonText}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.categoryButton}
          onPress={() => setSelectedCategory("news")}
        >
          <Text style={styles.categoryButtonText}>News</Text>
        </TouchableOpacity>
      </View>
      {data.articles && data.articles.length > 0 ? (
        <ScrollView contentContainerStyle={styles.container}>
          {data.articles.map((article, index) => (
            <Card key={index} style={styles.card}>
              <Image 
                source={{ uri: article.urlToImage }} 
                style={styles.image} 
              />
              <View style={styles.content}>
                <Text style={styles.title}>{article.title}</Text>
                <Text style={styles.description}>{article.description}</Text>
                <Text style={styles.publishedAt}>{article.publishedAt}</Text>
              </View>
            </Card>
          ))}
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
    
    

  );
};
  
  
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
   alignContent: 'center',


  },
  card: {
    width: '95%',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#3E3364',
    
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
  publishedAt: {
    fontSize: 14,
    color: 'gray',
  },
  categoryButtonContainer: {
    flexDirection: 'row',
    marginTop: 200,
    justifyContent: 'center',
  },
  categoryButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 10,
  },
  categoryButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default News;



                      