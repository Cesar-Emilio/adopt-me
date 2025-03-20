import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AdminEditPetScreen = ({ route, navigation }) => {
  const { petId } = route.params;
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    // Aquí simulas la carga de la mascota desde una base de datos.
    // En un caso real, podrías hacer una llamada API para obtener los detalles de la mascota.
    const pet = {
      id: petId,
      name: 'Fido',
      breed: 'Labrador',
      size: 'Medium',
    };

    setName(pet.name);
    setBreed(pet.breed);
    setSize(pet.size);
  }, [petId]);

  const handleEditPet = () => {
    // Aquí enviarías los cambios a la API para actualizar la mascota.
    alert(`Mascota ${name} editada`);
    navigation.goBack(); // Regresa a la lista de mascotas
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Editar Mascota</Text>

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

      <Button title="Guardar Cambios" onPress={handleEditPet} />
    </View>
  );
};

export default AdminEditPetScreen;
