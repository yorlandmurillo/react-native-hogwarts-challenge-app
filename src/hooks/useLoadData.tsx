import {useState} from 'react';

export default function useLoadData() {
  const [characters, setAllCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://hp-api.onrender.com/api/characters',
      );

      const data = await response.json();
      setAllCharacters(data);
      setLoading(false);
    } catch (err) {
      console.log('Err', err);
      setLoading(false);
    }
  };

  return {characters, loading, fetchCharacters};
}
