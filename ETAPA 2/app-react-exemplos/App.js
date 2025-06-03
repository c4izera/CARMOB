import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert } from 'react-native';

const baseUrl = 'http://<IP_DA_SUA_MAQUINA>:3000';

export default function App() {
  const [compras, setCompras] = useState([]);
  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [editId, setEditId] = useState(null);
  const [editItem, setEditItem] = useState('');
  const [editQuantidade, setEditQuantidade] = useState('');

  // Buscar todas as compras
  const fetchCompras = async () => {
    try {
      const response = await fetch(`${baseUrl}/compras`);
      const data = await response.json();
      setCompras(data);
    } catch (error) {
      console.error("Erro ao buscar compras:", error);
    }
  };

  useEffect(() => {
    fetchCompras();
  }, []);

  // CREATE
  const addCompra = async () => {
    if (item.trim() === '' || quantidade.trim() === '') {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/compras`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: item.trim(), quantidade: parseInt(quantidade) })
      });
      if (response.ok) {
        await fetchCompras();
        setItem('');
        setQuantidade('');
      }
    } catch (error) {
      console.error("Erro ao adicionar compra:", error);
    }
  };

  // UPDATE
  const updateCompra = async (id) => {
    if (editItem.trim() === '' || editQuantidade.trim() === '') {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/compras/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: editItem, quantidade: parseInt(editQuantidade) })
      });
      if (response.ok) {
        await fetchCompras();
        setEditId(null);
        setEditItem('');
        setEditQuantidade('');
      }
    } catch (error) {
      console.error("Erro ao atualizar compra:", error);
    }
  };

  // DELETE
  const deleteCompra = async (id) => {
    Alert.alert(
      'Excluir',
      'Deseja realmente excluir este item?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          onPress: async () => {
            try {
              const response = await fetch(`${baseUrl}/compras/${id}`, { method: 'DELETE' });
              if (response.ok) await fetchCompras();
            } catch (error) {
              console.error("Erro ao deletar compra:", error);
            }
          }
        }
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.item} - Quantidade: {item.quantidade}</Text>
      <View style={styles.buttons}>
        <Button title="Editar" onPress={() => {
          setEditId(item.id);
          setEditItem(item.item);
          setEditQuantidade(String(item.quantidade));
        }} />
        <Button title="Excluir" onPress={() => deleteCompra(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item para comprar"
        value={item}
        onChangeText={setItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <Button title="Adicionar Compra" onPress={addCompra} />
      <FlatList
        data={compras}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        style={styles.list}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});