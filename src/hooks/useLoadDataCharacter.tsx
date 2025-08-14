import {useState} from 'react';

export default function useLoadDataCharacter() {
  const [character, setCharacter] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacter = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://hp-api.onrender.com/api/character/${id}`,
      );

      const data = await response.json();
      setCharacter(data[0]);
      setLoading(false);
    } catch (err) {
      console.log('Err', err);
      setLoading(false);
    }
  };

  return {character, loading, fetchCharacter};
}
