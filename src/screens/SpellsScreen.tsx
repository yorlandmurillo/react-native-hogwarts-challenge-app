import React, {useContext, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {FavoriteContext} from '../context/FavoriteContext';
import useLoadDataSpells from '../hooks/useLoadDataSpells';

type Spell = {
  id: number;
  name: string;
  description: string;
};
export default function SpellsScreen({navigation, route}: any) {
  const {spells, loading, fetchSpells} = useLoadDataSpells();
  const {mainHouse}: any = useContext(FavoriteContext);
  useEffect(() => {
    fetchSpells();
  }, []);

  const renderItem = ({item}: {item: Spell}) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
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
        data={spells}
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
