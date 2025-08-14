import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet, Pressable} from 'react-native';
import {FavoriteContext} from '../context/FavoriteContext';
import {hogwart_castle} from '../utils/houses.json';
import {getData, storeData} from '../utils/storage';

export default function FavoriteHouseScreen({navigation, route}: any) {
  const {mainHouse, setMainHouse}: any = useContext(FavoriteContext);

  const RenderHouse = ({item}: {item: any}) => (
    <View style={styles.card}>
      <Pressable
        onPress={() => {
          setMainHouse(item);
        }}>
        <Image source={{uri: item.image}} style={styles.image} />
        {/* <View style={styles.info}> */}

        {mainHouse?.name === item.name && (
          <Text style={styles.favorite}>Chosen One</Text>
        )}
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {/* </View> */}
      </Pressable>
    </View>
  );

  return (
    <View style={[styles.container, {backgroundColor: mainHouse?.color}]}>
      <Text style={styles.title}>
        Click on your favorite House to Choose it
      </Text>
      {hogwart_castle.map((house: any) => (
        <RenderHouse item={house} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 12,
    margin: 12,
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
    backgroundColor: 'red',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  title: {
    marginTop: 6,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  favorite: {
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFF',
  },
  description: {
    fontSize: 12,
    fontWeight: '',
    color: '#DDD',
  },
});
