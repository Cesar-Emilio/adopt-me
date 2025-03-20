import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, Image } from "react-native";
import axios from "axios";

const PetsListScreen = ({ navigation }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random/10")
      .then((response) => {
        setPets(response.data.message);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>Lista de Mascotas</Text>
      <FlatList
        data={pets}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item }} style={{ width: 100, height: 100 }} />
            <Button
              title="Ver detalles"
              onPress={() => navigation.navigate("PetDetails", { pet: item })}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default PetsListScreen;
