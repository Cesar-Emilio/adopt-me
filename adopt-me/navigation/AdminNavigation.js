import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminPetsListScreen from "../screens/AdminPetListScreen.js";
import AdminAddPetScreen from "../screens/AdminAddPetScreen.js";
import AdminEditPetScreen from "../screens/AdminEditPetScreen.js";

const Stack = createStackNavigator();

const AdminNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="AdminPetsList" component={AdminPetsListScreen} />
    <Stack.Screen name="AdminAddPet" component={AdminAddPetScreen} />
    <Stack.Screen name="AdminEditPet" component={AdminEditPetScreen} />
  </Stack.Navigator>
);

export default AdminNavigator;
