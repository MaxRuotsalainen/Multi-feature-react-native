import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

const CheatSheet = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  
  const htmlCheatsheet = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Cheatsheet</title>
    </head>
    <body>
      <!-- Headings -->
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      
      <!-- Paragraph -->
      <p>This is a paragraph</p>
      
      <!-- Link -->
      <a href="https://www.example.com">This is a link</a>
      
      <!-- Image -->
      <img src="image.jpg" alt="An image">
      
      <!-- List -->
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      
      <!-- Table -->
      <table>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
        <tr>
          <td>Row 1, Column 1</td>
          <td>Row 1, Column 2</td>
        </tr>
        <tr>
          <td>Row 2, Column 1</td>
          <td>Row 2, Column 2</td>
        </tr>
      </table>
    </body>
  </html>
  `;
  
  const cssCheatsheet = `
  /* Selectors */
  h1 {
    font-size: 36px;
    color: blue;
  }
  
  /* Class selector */
  .highlight {
    background-color: yellow;
  }
  
  /* ID selector */
  #unique {
    font-weight: bold;
  }
  
  /* Pseudo-class selector */
  a:hover {
    text-decoration: underline;
  }
  
  /* Media query */
  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
    }
  }
  `;
  
  const javascriptCheatsheet = `
  // Variables
  let name = "John Doe";
  console.log(name);
  
  // Conditional
  let age = 28;
  
  if (age >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are not an adult");
  }
  
  // Function
  function sayHello(name) {
    console.log("Hello " + name);
  }
  
  sayHello(name);
  
  // Array
  let fruits = ["apple", "banana", "cherry"];
  console.log(fruits[1]);
  // Loop
  for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  }
  
  // Object
  let person = {
  name: "Jane Doe",
  age: 30,
  sayHello: function() {
  console.log("Hello, my name is " + this.name);
  }
  };
  
  console.log(person.name);
  person.sayHello();
  `;
  
  const handleSelectLanguage = (language) => {
  setSelectedLanguage(language);
  };
  
  return (
  <View style={styles.container}>
  <View style={styles.buttonsContainer}>
  <Button
  title="HTML"
  onPress={() => handleSelectLanguage("html")}
  />
  <Button
  title="CSS"
  onPress={() => handleSelectLanguage("css")}
  />
  <Button
  title="JavaScript"
  onPress={() => handleSelectLanguage("javascript")}
  />
  </View>
  {selectedLanguage !== "" && (
  <ScrollView style={styles.scrollContainer}>
  <Text style={styles.cheatsheet}>
  {selectedLanguage === "html"
  ? htmlCheatsheet
  : selectedLanguage === "css"
  ? cssCheatsheet
  : javascriptCheatsheet}
  </Text>
  </ScrollView>
  )}
  </View>
  );
  };
  
  const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  width: '100%',
  color: '#fff',
  },
  buttonsContainer: {
    marginTop: 100,
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: '#6200ee',
  marginBottom: 20,
  padding: 10,
  borderRadius: 10,
  color: '#fff',

  },
  scrollContainer: {
  flex: 1,
  padding: 10,
  backgroundColor: "#ddd"
  },
  cheatsheet: {
  fontSize: 16,
  color: "#333",
  textAlign: "left",
  width: '100%',
  }
  });
  
  export default CheatSheet;