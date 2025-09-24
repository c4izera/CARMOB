import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import CartItem from './CartItem';
import { useShop } from '../../contexts/ShopContext';

const CartScreen = ({ navigation }: any) => {
  const { cartItems } = useShop();

  const renderItem = ({ item }: any) => <CartItem item={item} />;

  const cartTemp = [
    { 
      id: 1,
      quantity: 2,
      price: 8.5,
      name: "Brigadeiro promoção especial",
      image: "http://10.81.205.50:5000/uploads/brigadeiro-matcha-white.png",
    }
  ];

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Carrinho de compras</Text>
      <FlatList 
        data={cartItems.length > 0 ? cartItems : cartTemp} // Use cartTemp se cartItems estiver vazio
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default CartScreen;