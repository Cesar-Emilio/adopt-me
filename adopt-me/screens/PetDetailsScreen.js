import React from "react";
import { View, Text, Image } from "react-native";

const PetDetailsScreen = ({ route }) => {
  const { pet } = route.params;
  return (
    <View>
      <Text>Detalles de la Mascota</Text>
      <Image source={{ uri: pet }} style={{ width: 200, height: 200 }} />
      <Text>Raza: Perro</Text>
      <Text>Tamaño: Mediano</Text>
    </View>
  );
};

export default PetDetailsScreen;
