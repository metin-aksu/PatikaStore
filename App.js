import React, {useEffect, useState, useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import {productsJson} from './productsJson.js';
import ProductCard from './components/ProductCard.js';

export default function App() {
  const [products, setProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  useEffect(() => setProducts(productsJson), []);

  const filteredProducts = useMemo(() => {
    if (searchKeyword !== null) {
      return products.filter(item => item?.title.includes(searchKeyword));
    } else {
      return products;
    }
  }, [products, searchKeyword]);

  const listProducts = ({item}) => <ProductCard product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Patika Store</Text>
      <TextInput
        placeholder="Ara..."
        style={styles.searchinput}
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />
      <FlatList
        data={filteredProducts}
        renderItem={listProducts}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  appTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'maroon',
    marginTop: 10,
  },
  searchinput: {
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: '#DEDEDE',
    height: 50,
    margin: 10,
    paddingLeft: 20,
  },
});
