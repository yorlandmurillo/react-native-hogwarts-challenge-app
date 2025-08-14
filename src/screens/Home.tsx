import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {FavoriteContext} from '../context/FavoriteContext';

const {width} = Dimensions.get('window');
const BUTTON_WIDTH = Math.min(320, Math.round(width * 0.88));

export default function HomeScreen({navigation}: any) {
  const {mainHouse, setMainHouse}: any = useContext(FavoriteContext);
  const handlePress = (route: any) => {
    if (route == 'students' || route == 'staff') {
      navigation.navigate('CharactersScreen', {filter: route});
    } else {
      navigation.navigate(route);
    }
  };

  return (
    <SafeAreaView style={[styles.safe, {backgroundColor: mainHouse?.color}]}>
      <View style={styles.container}>
        <View style={styles.logoWrap} accessible accessibilityRole="image">
          <Text style={styles.buttonText}>Profile</Text>
          <TouchableOpacity onPress={() => handlePress('ProfileScreen')}>
            <Image
              source={{uri: mainHouse?.image}}
              resizeMode="contain"
              style={[styles.logo]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsWrap}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('CharactersScreen')}
            accessibilityLabel="Characters"
            accessibilityRole="button">
            <Text style={styles.buttonText}>Characters</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('students')}
            accessibilityLabel="Only Students"
            accessibilityRole="button">
            <Text style={styles.buttonText}>Only Students</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('staff')}
            accessibilityLabel="Only Staff"
            accessibilityRole="button">
            <Text style={styles.buttonText}>Only Staff</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('SpellsScreen')}
            accessibilityLabel="Spells"
            accessibilityRole="button">
            <Text style={styles.buttonText}>Spells</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('FavoriteHouseScreen')}
            accessibilityLabel="Favorite House"
            accessibilityRole="button">
            <Text style={styles.buttonText}>Favorite House</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('FavoriteCharactersScreen')}
            accessibilityLabel="Favorite Characters"
            accessibilityRole="button">
            <Text style={styles.buttonText}>Favorite Characters</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.footer}>
          <Text style={styles.footerText}>Welcome to the Hogwarts app</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logoWrap: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    backgroundColor: 'transparent',
    width: 140,
    height: 140,
    borderRadius: 6,
    marginTop: 12,
  },
  buttonsWrap: {
    marginTop: 32,
    width: BUTTON_WIDTH,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#2b2b2b',
    borderRadius: 10,
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  footerText: {
    color: '#666',
  },
});
