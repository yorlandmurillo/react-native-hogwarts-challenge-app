import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/Home';
import CharactersScreen from './src/screens/CharactersScreen';
import CharacterDetailScreen from './src/screens/CharacterDetailScreen';
import SpellsScreen from './src/screens/SpellsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {FavoriteProvider} from './src/context/FavoriteContext';
import FavoriteHouseScreen from './src/screens/FavoriteHouseScreen';
import FavoriteCharactersScreen from './src/screens/FavoriteCharactersScreen';

const Stack = createStackNavigator<any>();
const SHOW_STORYBOOK = true; // Change to false to see normal app

function App() {

  if (SHOW_STORYBOOK) {
    const Storybook = require('./.storybook').default;
    return <Storybook />;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <FavoriteProvider>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="HomeScreen"
              options={{title: '', headerShown: false}}
              component={HomeScreen}
            />
            <Stack.Screen
              name="CharactersScreen"
              options={{title: 'Characters'}}
              component={CharactersScreen}
            />
            <Stack.Screen
              name="CharacterDetailScreen"
              options={{title: 'Details'}}
              component={CharacterDetailScreen}
            />
            <Stack.Screen
              name="SpellsScreen"
              options={{title: 'Spells'}}
              component={SpellsScreen}
            />
            <Stack.Screen
              name="ProfileScreen"
              options={{title: 'Profile'}}
              component={ProfileScreen}
            />
            <Stack.Screen
              name="FavoriteHouseScreen"
              options={{title: 'Houses'}}
              component={FavoriteHouseScreen}
            />

            <Stack.Screen
              name="FavoriteCharactersScreen"
              options={{title: 'Favorite Characters'}}
              component={FavoriteCharactersScreen}
            />
          </Stack.Navigator>
        </FavoriteProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
