import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const AdminPetsListScreen = ({ navigation }) => {
  // Aquí podrías obtener las mascotas desde tu API o contexto
  const pets = [
    { id: 1, name: 'Fido', breed: 'Labrador', size: 'Medium' },
    { id: 2, name: 'Milo', breed: 'Bulldog', size: 'Small' },
    // Simula datos de mascotas
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Lista de Mascotas</Text>

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15, padding: 10, borderWidth: 1 }}>
            <Text style={{ fontSize: 18 }}>Nombre: {item.name}</Text>
            <Text>Raza: {item.breed}</Text>
            <Text>Tamaño: {item.size}</Text>

            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={() => navigation.navigate('AdminEditPet', { petId: item.id })}
            >
              <Button title="Editar" />
            </TouchableOpacity>
          </View>
        )}
      />

      <Button
        title="Agregar Nueva Mascota"
        onPress={() => navigation.navigate('AdminAddPet')}
      />
    </View>
  );
};

export default AdminPetsListScreen;
