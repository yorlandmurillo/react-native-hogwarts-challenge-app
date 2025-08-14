import React, {useContext, useEffect} from 'react';
import {View, Text, Image, FlatList, StyleSheet, Pressable} from 'react-native';
import {FavoriteContext} from '../context/FavoriteContext';
import useLoadData from '../hooks/useLoadData';
import useLoadDataCharacter from '../hooks/useLoadDataCharacter';

export default function CharacterDetailScreen({route}: any) {
  const {character, loading, fetchCharacter} = useLoadDataCharacter();
  const {mainHouse}: any = useContext(FavoriteContext);

  useEffect(() => {
    fetchCharacter(route?.params?.id);
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: mainHouse?.color}]}>
      <View style={styles.card}>
        <View style={styles.info}>
          <Image source={{uri: character.image}} style={styles.image} />
          <Text style={styles.name}>{character.name}</Text>
          <Text style={styles.age}>House: {character.house}</Text>
          <Text style={styles.age}>Date Of Birth: {character.yearOfBirth}</Text>
          <Text style={styles.age}>Eye Color: {character.eyeColour}</Text>
          <Text style={styles.age}>Gender: {character.gender}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
  },
  loading: {
    alignItems: 'center',
    padding: 10,
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 10,
    width: '60%',
    marginBottom: 12,
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 180,
    borderRadius: 12,
    marginRight: 12,
  },
  info: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  age: {
    fontSize: 14,
    color: '#AAAAAA',
    marginTop: 4,
  },
});
