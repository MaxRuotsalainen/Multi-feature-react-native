import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal } from 'react-native';
import axios from 'axios';

const CurrencyConverter = () => {
  const [inputCurrency, setInputCurrency] = useState('USD');
  const [outputCurrency, setOutputCurrency] = useState('EUR');
  const [inputValue, setInputValue] = useState(0);
  const [showInputCurrencyModal, setShowInputCurrencyModal] = useState(false);
  const [showOutputCurrencyModal, setShowOutputCurrencyModal] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=eRMbQoRwtt10k1dij5d1usJdu3hshodXHA5996gm&currencies=${outputCurrency}&base_currency=${inputCurrency}`);
      setExchangeRate(response.data.data[outputCurrency].value);
    };
    fetchExchangeRate();
  }, [inputCurrency, outputCurrency]);

  const convert = () => inputValue * exchangeRate;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Modal visible={showInputCurrencyModal} animationType="slide">
      <View style={styles.container}>
          <View>
            <TouchableOpacity
             style={styles.closeButton}
              onPress={() => {
                setInputCurrency('USD');
                setShowInputCurrencyModal(false);
              }}
            >
              <Text style={styles.closeButtonText}>USD</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.closeButton}
              onPress={() => {
                setInputCurrency('EUR');
                setShowInputCurrencyModal(false);
              }}
            >
               <Text style={styles.closeButtonText}>EUR</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.closeButton}
              onPress={() => {
                setInputCurrency('GBP');
                setShowInputCurrencyModal(false);
              }}
            >
               <Text style={styles.closeButtonText}>GBP</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.closeButton}
              onPress={() => {
                setInputCurrency('INR');
                setShowInputCurrencyModal(false);
              }}
            >
              <Text style={styles.closeButtonText}>INR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
    style={styles.closeButton}
        onPress={() => setShowInputCurrencyModal(true)}
      >
        <Text style={styles.closeButtonText}>{inputCurrency}</Text>
      </TouchableOpacity>
      <Modal visible={showOutputCurrencyModal} animationType="slide">
      <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setOutputCurrency('USD');
                setShowOutputCurrencyModal(false);
              }}
            >
               <Text style={styles.closeButtonText}>USD</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.closeButton}
              onPress={() => {
                setOutputCurrency('EUR');
                setShowOutputCurrencyModal(false);
              }}
            >
               <Text style={styles.closeButtonText}>EUR</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.closeButton}
              onPress={() => {
                setOutputCurrency('GBP');
                setShowOutputCurrencyModal(false);
              }}
            >
               <Text style={styles.closeButtonText}>GBP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setOutputCurrency('INR');
                setShowOutputCurrencyModal(false);
              }}
            >
               <Text style={styles.closeButtonText}>INR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
   style={styles.closeButton}
        onPress={() => setShowOutputCurrencyModal(true)}
      >
        <Text style={styles.closeButtonText}>{outputCurrency}</Text>
      </TouchableOpacity>
      <Text  style={styles.inputText}>Input Value:</Text>
      <TextInput
      style={styles.input} keyboardType="numeric"
      onChangeText={(value) => setInputValue(value)}
      value={inputValue.toString()}
    />
     
       
      <TouchableOpacity
        style={{ padding: 10, backgroundColor: 'lightgray', marginTop: 20 }}
        onPress={() => {
          setInputValue(convert());
        }}
      >
        <Text>Convert</Text>
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
    width : '100%',
    },
  closeButton: {
  backgroundColor: '#6200ee',
  padding: 10,
  borderRadius: 10,
  margin : 10,
  },
  input: {
    height: 40,
    borderColor: '#6200ee',
    borderWidth: 1,
    width: 200,
    textAlign: 'center',
    color: '#ffff',
    },
    inputText: {
 margin : 10,
      width: 200,
      textAlign: 'center',
      color: '#ffff',
      },
  closeButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
  },
  });
export default CurrencyConverter;

