// ProductInputScreen.js
import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Button, StyleSheet } from 'react-native';
import ProductProfile from './ProductProfile';
import AddProductForm from './AddProductForm';

const ProductInputScreen = ({ route, navigation }) => {
  const { category, addNameToList } = route.params;
  const [productList, setProductList] = useState([]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const handleAddProduct = (productName) => {
    setProductList([...productList, { name: productName, category, expirationDate: 'N/A' }]);
    setIsAddingProduct(false);
  };

  const handleEditProduct = (productData) => {
    // Navigate to the editing screen and pass the product data and callback function
    navigation.navigate('EditProduct', {
      productData,
      onSave: (editedProduct) => handleSaveProduct(productData, editedProduct),
    });
  };

  const handleSaveProduct = (oldProduct, editedProduct) => {
    // Update the product data in the list
    const updatedList = productList.map((product) => {
      if (product === oldProduct) {
        return editedProduct;
      }
      return product;
    });
    setProductList(updatedList);
  };

  const handleAddButtonPress = () => {
    setIsAddingProduct(true);
  };

  // Effect to handle edited product from EditProductScreen
  useEffect(() => {
    if (route.params && route.params.editedProduct) {
      handleSaveProduct(route.params.productData, route.params.editedProduct);
    }
  }, [route.params]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      {isAddingProduct ? (
        <AddProductForm onAddProduct={handleAddProduct} />
      ) : (
        <View>
          {productList.map((product, index) => (
            <ProductProfile key={index} productData={product} onEdit={() => handleEditProduct(product)} />
          ))}
          <Button title="Add" onPress={handleAddButtonPress} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductInputScreen;
