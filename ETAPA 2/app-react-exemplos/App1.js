import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
// CRUD em memoria
const [text, setText] = useState('');
const [editItem, setEditItem] = useState(null);
const [editItemText, setEditItemText] = useState('');


const incrementCounter = () => {
  setCounter(counter + 1);
};

const decrementCounter = () => {
  setCounter(counter - 1);
};

//CREATE
const addItem = () => {
  if (text.trim() === '') {
    return;
  }

// UPDATE
const updatedItems = (id) => {
  setItems( items.map(item => {
    if (item.id === id) {
      return { ...item, text: editItemText };
    }
    return item;
  }));
  setEditItem(null);
  setEditItemText('');
}

  const newItem = {
    id: Math.random().toString(),
    text: text.trim(),
  }
  setItems([...items, newItem]);
  setText('');
  console.log(items);

}

// DELETE
const deleteItem = (id) => {
  setItems(items.filter(item => item.id !== id));
}

// READ
const renderitem = ({ item }) => {
  if (item.id !== editItem) {
    return (
      <view style={styles.tem}>
        <text style={item.text}>{item.text}</text>
        <view style={styles.buttons}>
          <button title='Edit' onPress={() => {setEditItemId(item.id)}}></button>
          <button title='Delete' onPress={() => deleteItem(item.id)}></button>
        </view>
      </view>
    );

  } else {
    // Um item está sendo editado
    return (
      <view style={styles.item}> 
        <TextInput
          style={styles.editInput}
          value={editItemText}
          onChangeText={setEditItemText}
          autoFocus
        />
        <button title='Update' onPress={() => {updatedItems(item.id)}}></button>
      </view>
    )
  }
}
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter text item"
        />
        <Button 
        title='Add item'
        onPress={addItem}
        />
        <FlatList
          data={itens}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      <Text style={styles.text}>Olá App React native - atualiza</Text>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 200, height: 200 }}
      />

      <StatusBar style="auto" />
      <Text style={styles.text}>Counter: {counter}</Text>
    
      <View style={styles.buttonContainer}>
      <Button title="Increment" onPress={incrementCounter} />
      <Button title="Decrement" onPress={decrementCounter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
    text: {
    fontSize: 24,
    },
  buttonContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  list: {
   marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  itemText: {
    flex: 1,
    marginRight: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
  editInput: {
    flex: 1,
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  }
});
