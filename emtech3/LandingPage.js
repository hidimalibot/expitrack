// LandingPage.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();
  const [nameList, setNameList] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textAbove}>PRODUCTS SOON TO EXPIRE</Text>
      <ScrollView>
        {/* Remove the search bar and add button */}
        <View style={styles.nameList}>
          <TouchableOpacity
            style={styles.nameBox}
            onPress={() => {
              // Handle navigation to ProductInput or any other action
            }}
          >
            <Text>Product 1</Text>
          </TouchableOpacity>
          {/* Add more ProductProfile components as needed */}
        </View>
      </ScrollView>
      {/* Your bottom container content here */}
      <View style={styles.violetContainer}>
        {/* Container with violet background */}
        <View style={styles.pressablesContainer}>
          {/* First Pressable with HomeIcon */}
          <TouchableOpacity
            style={styles.pressable}
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Text>Home Icon</Text>
          </TouchableOpacity>

          {/* Second Pressable with WidgetsIcon */}
          <TouchableOpacity
            style={styles.pressable}
            onPress={() => {
              // Handle second pressable action
            }}
          >
            <Text>Widgets Icon</Text>
          </TouchableOpacity>

          {/* Third Pressable with HelpCenterIcon */}
          <TouchableOpacity
            style={styles.pressable}
            onPress={() => {
              // Handle third pressable action
            }}
          >
            <Text>Help Icon</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 16,
    backgroundColor: '#f6f5f5',
  },
  textAbove: {
    textAlign: 'center',
    color: '#2d0c57',
    fontSize: 45,
    fontWeight: 'thin',
    position: 'absolute',
    top: 40,
  },
  nameList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
  },
  nameBox: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 40,
    width: '48%',
    marginVertical: 10,
    borderRadius: 20,
    marginRight: 5,
  },
  violetContainer: {
    backgroundColor: 'violet',
    padding: 5,
    marginTop: 'auto',
    borderRadius: 10,
    marginBottom: 10,
  },
  pressablesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  pressable: {
    alignItems: 'center',
  },
});

export default LandingPage;
