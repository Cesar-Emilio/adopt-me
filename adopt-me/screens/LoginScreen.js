import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useContext(AuthContext);

  const handleLogin = () => {
    login(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((err) => {Y 
        console.error(err);
        alert('Error al iniciar sesión');
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Correo Electrónico"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Iniciar sesión" onPress={handleLogin} />
      )}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

export default LoginScreen;
