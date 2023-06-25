import React from 'react';
import {SafeAreaView, Image, Text, StyleSheet, Dimensions} from 'react-native';

export default function ProductCard({product}) {
  return (
    <SafeAreaView style={styles.card}>
      <SafeAreaView style={styles.imageArea}>
        <Image source={{uri: product?.imgURL}} style={styles.productImage} />
      </SafeAreaView>
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.price}>{product?.price}</Text>
      {Boolean(product?.inStock) === false && (
        <Text style={styles.stockStatus}>STOKTA YOK</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DEDEDE',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2 - 20,
  },
  title: {fontSize: 16, padding: 10, fontWeight: 'bold'},
  price: {fontSize: 16, padding: 10},
  stockStatus: {
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    color: 'red',
    fontWeight: 'bold',
  },
  imageArea: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: Dimensions.get('window').width / 2 - 40,
    height: 200,
    borderRadius: 10,
  },
});
