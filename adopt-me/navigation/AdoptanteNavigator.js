import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PetsListScreen from "../screens/PetListScreen.js";
import PetDetailsScreen from "../screens/PetDetailsScreen.js";
import FavoritesScreen from "../screens/FavoritesScreen.js";

const Stack = createStackNavigator();

const AdoptanteNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="PetsList" component={PetsListScreen} />
    <Stack.Screen name="PetDetails" component={PetDetailsScreen} />
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
  </Stack.Navigator>
);

export default AdoptanteNavigator;
