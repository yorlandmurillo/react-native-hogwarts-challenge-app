import React, {createContext, useEffect, useState} from 'react';
import {getData, storeData} from '../utils/storage';
import {hogwart_castle} from '../utils/houses.json';

export const FavoriteContext = createContext({});

export function FavoriteProvider(props: any) {
  const [mainHouse, setMainHouse] = useState<any>(null);
  const [favoriteList, setfavList] = useState([]);
  const [profileImg, setProfileImg] = useState('');

  useEffect(() => {
    if (!mainHouse) {
      //si no hay nada asigno por default la primera casa
      storeData('@house', hogwart_castle[0]);
      setMainHouse(hogwart_castle[0]);
    } else {
      storeData('@house', mainHouse);
    }
  }, [mainHouse]);

  const getHouse = async () => {
    const h = await getData('@house');
    setMainHouse(h);
  };

  const addToFavorite = (character: any) => {
    try {
      if (favoriteList.length === 0) {
        //if is empty, save first character
        setfavList([character]);
      } else {
        let items = favoriteList;
        items.push(character);
        console.log('items', items);
        setfavList(items);
      }
    } catch (e) {
      console.log('error saving vaforite list', e);
    }
  };
  const removeFromFavorite = (character: any) => {
    const idToRemove = character.id;
    const updatedListLessOne = favoriteList.filter(
      (it: any) => it.id !== idToRemove,
    );
    setfavList(updatedListLessOne);
  };

  const checkFavorite = (character: any) => {
    const idTofind = character.id;
    const found = favoriteList.filter((it: any) => it.id === idTofind);

    return found.length === 0 ? false : true;
  };

  const value = {
    mainHouse,
    setMainHouse,
    favoriteList,
    setfavList,
    addToFavorite,
    removeFromFavorite,
    checkFavorite,
    setProfileImg,
    profileImg,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
