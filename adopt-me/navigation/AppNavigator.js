import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import AdminNavigator from './AdminNavigation.js';
import AdoptanteNavigator from './AdoptanteNavigator.js';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        {user ? (
          user.role === 'admin' ? (
            <Drawer.Screen name="Admin" component={AdminNavigator} />
          ) : (
            <Drawer.Screen name="Adoptante" component={AdoptanteNavigator} />
          )
        ) : (
          <Drawer.Screen name="Login" component={LoginScreen} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;