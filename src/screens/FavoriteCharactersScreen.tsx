import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FavoriteContext} from '../context/FavoriteContext';

type Character = {
  id: number;
  name: string;
  image: string;
};
export default function FavoriteCharactersScreen({navigation, route}: any) {
  const {mainHouse, favoriteList, removeFromFavorite}: any =
    useContext(FavoriteContext);

  const renderItem = ({item}: {item: Character}) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.button}>
        {/* remove button */}
        <TouchableOpacity
          style={{}}
          onPress={() => {
            removeFromFavorite(item);
          }}>
          <Text style={styles.name}>remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (!favoriteList) {
    return (
      <View style={styles.loading}>
        <Text>No data...</Text>
      </View>
    );
  }
  console.log('favoriteList!!!', favoriteList);
  return (
    <View style={[styles.container, {backgroundColor: mainHouse?.color}]}>
      <FlatList
        data={favoriteList}
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
    alignItems: 'start-flex',
  },
  button: {
    alignSelf: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 14,
    color: '#AAAAAA',
    marginTop: 4,
  },
});
