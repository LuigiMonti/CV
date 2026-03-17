// Components/Pokemons/Pokemons.tsx

import { useState, useEffect } from 'react';
import pokeService from '../../Services/Pokeapi_service';
import './poke.css';

function Pokemons() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pokeService.getFavorites()
      .then(setPokemons)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <div id="easter-egg">
      {pokemons.map((pokemon: any) => (
        <img
          key={pokemon.id}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          title={pokemon.name}
        />
      ))}
    </div>
  );
}

export default Pokemons;