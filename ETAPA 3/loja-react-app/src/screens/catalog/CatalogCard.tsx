import React, { useContext} from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const CatalogCard = ({ product, onBuyPress }: any ) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.details}>
                <text style={styles.name}>{product.name}</text>
                <text style={styles.description}>{product.description}</text>
                <text style={styles.price}>${product.price.tofixed(2)}</text>
            </View>
            <Button title="Comprar" color="#28A745" onPress={onBuyPress} />
        </View>
    );
}
export default CatalogCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    image: {},
    details: {},
    name: {},
    description: {},
    price: {},
    buttonsContainer: {}
});