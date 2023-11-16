import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming you have MaterialIcons in your vector-icons library

const HomeScreen = ({ navigation }) => {
  const [nameList, setNameList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addNameToList = (name) => {
    setNameList([...nameList, name]);
  };

  const filteredNameList = nameList.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textAbove}>Categories</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="🔍 SEARCH"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
      <ScrollView
        style={styles.categoryContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.nameList}>
          {filteredNameList.map((name, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.nameBox,
                index % 2 === 0 ? styles.leftNameBox : styles.rightNameBox,
              ]}
              onPress={() => {
                navigation.navigate('ProductInput', { category: name });
              }}
            >
              <Text>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            navigation.navigate('Category', { addNameToList });
          }}
        >
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>
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
            <Icon name="home" size={24} color="black" />
          </TouchableOpacity>

          {/* Second Pressable with WidgetsIcon */}
          <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}>⬛</Text>
          </Pressable>

          {/* Third Pressable with HelpCenterIcon */}
          <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}>❔</Text>
          </Pressable>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderColor: '#d4bfb0',
    alignContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    color: '#9586A8',
    borderWidth: 1,
    borderColor: '#D9D0E3',
    marginRight: 15,
    padding: 5,
    width: 350,
    borderRadius: 27,
    backgroundColor: 'white',
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
  leftNameBox: {
    alignSelf: 'flex-start',
  },
  rightNameBox: {
    alignSelf: 'flex-end',
  },
  categoryContainer: {
    maxHeight: 420,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 80,
    right: 150,
    width: 100,
    height: 40,
  },
  roundButton: {
    borderRadius: 20,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
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
  pressableText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
