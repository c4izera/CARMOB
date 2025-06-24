import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';

const BASE_URL = 'http://10.81.205.9:8081';

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [editItemText, setEditItemText] = useState('');
  const [loading, setLoading] = useState(false);

  // Buscar tudo
  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/items`);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // CREATE
  const addItem = async () => {
    if (text.trim() === '') return;

    try {
      const response = await fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (response.ok) {
        await fetchItems();
        setText('');
      } else {
        console.error('Error adding item:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  // UPDATE
  const updatedItems = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: editItemText }),
      });

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      await fetchItems();
      setEditItem(null);
      setEditItemText('');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  // DELETE
  const deleteItem = (id) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const response = await fetch(`${BASE_URL}/items/${id}`, {
                method: 'DELETE',
              });
              if (response.ok) {
                await fetchItems();
              } else {
                console.error('Error deleting item:', response.statusText);
              }
            } catch (error) {
              console.error('Error deleting item:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  // RENDER
  const renderItem = ({ item }) => {
    if (item.id !== editItem) {
      return (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.text}</Text>
          <View style={styles.buttons}>
            <Button
              title="Edit"
              onPress={() => {
                setEditItem(item.id);
                setEditItemText(item.text);
              }}
            />
            <Button title="Delete" onPress={() => deleteItem(item.id)} />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.item}>
          <TextInput
            style={styles.editInput}
            value={editItemText}
            onChangeText={setEditItemText}
            autoFocus
          />
          <Button title="Update" onPress={() => updatedItems(item.id)} />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter text item"
      />
      <Button title="Add item" onPress={addItem} />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
      <Text style={styles.text}>Olá App React Native - atualiza</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 200, height: 200 }}
      />
      <StatusBar style="auto" />
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
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
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
    gap: 10,
  },
  editInput: {
    flex: 1,
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
