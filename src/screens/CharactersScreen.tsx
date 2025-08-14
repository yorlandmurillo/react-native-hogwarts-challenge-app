import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {FavoriteContext} from '../context/FavoriteContext';
import useLoadData from '../hooks/useLoadData';

type Character = {
  id: number;
  name: string;
  image: string;
};

export default function CharactersScreen({navigation, route}: any) {
  const {characters, loading, fetchCharacters} = useLoadData();
  const [infoToShow, setInfoShow] = useState([]);
  const {
    mainHouse,
    addToFavorite,
    removeFromFavorite,
    favoriteList,
    checkFavorite,
  }: any = useContext(FavoriteContext);
  useEffect(() => {
    fetchCharacters();
  }, []);

  //filter for student or castle staff
  useEffect(() => {
    console.log('favoriteList', favoriteList);
    if (route?.params?.filter == 'students') {
      const studentsFound = characters.filter(
        (chars: any) => chars?.hogwartsStudent === true,
      );
      setInfoShow(studentsFound);
    } else if (route?.params?.filter == 'staff') {
      const staffFound = characters.filter(
        (chars: any) => chars?.hogwartsStaff === true,
      );
      setInfoShow(staffFound);
    } else {
      setInfoShow(characters);
    }
  }, [characters, favoriteList]);

  const pressGoToDetails = (id: number) => {
    navigation.navigate('CharacterDetailScreen', {id: id});
  };

  const renderItem = ({item}: {item: Character}) => (
    <View style={[styles.card]}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => {
          pressGoToDetails(item.id);
        }}>
        <Image
          source={{uri: item.image ? item.image : null}}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
      {/* favorite button */}

      <TouchableOpacity
        onPress={() => {
          checkFavorite(item) ? removeFromFavorite(item) : addToFavorite(item);
          //addToFavorite(item);
        }}>
        <Text style={styles.name}>
          {checkFavorite(item) ? 'remove' : 'add'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: mainHouse?.color}]}>
      <FlatList
        data={infoToShow}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#121212',
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
    marginBottom: 12,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inFavorite: {
    fontSize: 10,
    color: '#AAAAAA',
    marginHorizontal: 8,
  },
});
