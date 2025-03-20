import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AdminAddPetScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [size, setSize] = useState('');

  const handleAddPet = () => {
    // Aquí, normalmente, enviarías la nueva mascota a la API para agregarla a la base de datos.
    alert(`Mascota ${name} agregada`);
    navigation.goBack(); // Regresa a la lista de mascotas
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Agregar Nueva Mascota</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nombre"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        value={breed}
        onChangeText={setBreed}
        placeholder="Raza"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        value={size}
        onChangeText={setSize}
        placeholder="Tamaño"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />

      <Button title="Agregar Mascota" onPress={handleAddPet} />
    </View>
  );
};

export default AdminAddPetScreen;
