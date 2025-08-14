import {useState} from 'react';

export default function useLoadDataSpells() {
  const [spells, setSpells] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchSpells = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://hp-api.onrender.com/api/spells`);

      const data = await response.json();
      setSpells(data);
      setLoading(false);
    } catch (err) {
      console.log('Err', err);
      setLoading(false);
    }
  };

  return {spells, loading, fetchSpells};
}
