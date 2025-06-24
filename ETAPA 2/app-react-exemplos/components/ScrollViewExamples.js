import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

class ScrollViewExample extends Component {
    state = {
        names: [
            {'name': 'Ben', 'id': 1},
            {'name': 'Sara', 'id': 2},
            {'name': 'John', 'id': 3},
            {'name': 'Jane', 'id': 4},
            {'name': 'Mike', 'id': 5},
            {'name': 'Anna', 'id': 6},
            {'name': 'Tom', 'id': 7},
            {'name': 'Lucy', 'id': 8},
            {'name': 'David', 'id': 9},
            {'name': 'Emma', 'id': 10},
            {'name': 'Chris', 'id': 11},
            {'name': 'Kate', 'id': 12},
        ]
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <View
                                key={item.id}
                                style={StyleSheet.item}
                            >
                                <Image source={require('../assets/favicon.png')} />
                                <Text>{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default ScrollViewExample;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
});