import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://ghibliapi.vercel.app/films');
        setMovies(response.data);
      } catch (error) {
        alert('Error al obtener películas');
      }
    };
    fetchMovies();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { movieId: item.id })}
      style={{ marginBottom: 20 }}
    >
      <Image source={{ uri: item.image }} style={{ width: 100, height: 150 }} />
      <Text>{item.title}</Text>
      <Text>{item.release_date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Películas de Studio Ghibli</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
