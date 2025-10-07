import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { useShop } from "../../contexts/ShopContext";

const CartItem = ({ item }: any) => {
    const { addToCart, removeFromCart } = useShop();

    const handleRemove = (item: any) => {
        removeFromCart(item.id);
        console.log('Produto removido do carrinho');
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: item?.image || 'https://via.placeholder.com/100' }} style={styles.image} />
            <View>
                <Text style={styles.name}>{item?.name || 'Produto'}</Text>
                <View style={styles.quantity}>
                    <Text style={styles.price}>R$ {(item?.price * item?.quantity || 0).toFixed(2)}</Text>
                    <TouchableOpacity onPress={() => addToCart(item, -1)} style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityValue}>{item?.quantity || 0}</Text>
                    <TouchableOpacity onPress={() => addToCart(item)} style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRemove(item)} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>Remover</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderColor: '#ddd',
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    price: {
        fontSize: 14,
        color: '#007BFF',
        marginRight: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
    quantityValue: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    removeButton: {
        marginLeft: 10,
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
});