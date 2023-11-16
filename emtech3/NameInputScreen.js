import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';

const NameInputScreen = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSaveName = () => {
    if (name.trim() === '') {
      setModalVisible(true);
    } else {
      const { addNameToList } = route.params;
      addNameToList(name);
      navigation.goBack();
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textAbove}>Create a New Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Category"
        onChangeText={handleNameChange}
        value={name}
      />
      <View style={styles.DoneContainer}>
        <Button title="DONE" onPress={handleSaveName} color="#0bce83" />
      </View>
      {/* Modal for empty input */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Oops! Please input first.</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.modalButton}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 120,
  },
  textAbove: {
    position: 'absolute',
    top: 10,
    textAlign: 'center',
    color: '#2d0c57',
    fontSize: 40,
    fontWeight: 'thin',
    fontFamily: 'helvetica',
  },
  DoneContainer: {
    marginTop: 20,
    width: '80%',
  },
  // Styles for the modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    fontSize: 16,
    color: 'blue',
  },
});

export default NameInputScreen;
