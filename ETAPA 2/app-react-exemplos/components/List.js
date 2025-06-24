import React, { Component } from "react";
import {Text, View, StyleSheet, Touchableopacity, TouchableOpacity } from "react-native";


class List extends Component {
    state = {
        names: [
            {id: 0, name: 'Ben'}, 
            {id: 1, name: 'Susan'}, 
            {id: 2, name: 'Robert'}, 
            {id: 3, name: 'Chrischarles'},
        ]
    }
    alertItemName = (item) => {
        alert(item.name);
    }
    render() {
        return (
            <view>
                <text style={styles.text}>
                    Lista de itens "clicáveis"
                </text>
                <text>
                    {
                        this.state.names.map((item, index) => (
                            <TouchableOpacity
                            key={item.id}
                            style={styles.container}
                            onPress={() => this.alertItemName(item)}
                            >
                                <text style={styles.text}>
                                    {item.name}
                                </text>
                            </TouchableOpacity>
                        ))
                    }
                </text>
            </view>
        );
    }
}
export default List;

const styles = StyleSheet.create({
    container : {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c',
    }
});
