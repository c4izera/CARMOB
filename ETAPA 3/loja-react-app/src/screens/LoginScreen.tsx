import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView } from "react-native";

import { requestLogin } from "../services/authService";
import { useAuth } from "../contexts/AuthContext";

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            // Chamada ao backend
            const token = await requestLogin(email, password);
            login(token);
            console.log('Login ok');
        } catch (err: any) {
            setError(err.message || 'Erro ao fazer login');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Email:</Text>
                <TextInput 
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <Text>Senha:</Text>
                <TextInput 
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {error ? (
                    <Text style={{ color: 'red' }}>
                        {error}
                    </Text>
                ) : null}
                <Button title="Entrar" onPress={handleLogin} />
                <Button title="Registrar" onPress={() => navigation.navigate('Register')} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 12,
    },
});
