import React from "react";
import { View, Text, FlatList } from "react-native";

const FavoritesScreen = () => {
  const favorites = ["https://dog.ceo/dog-api/documentation/random"];

  return (
    <View>
      <Text>Favoritos</Text>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FavoritesScreen;
