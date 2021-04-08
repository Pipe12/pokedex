import { useState, useEffect } from 'react';
import { StyledPokemonView } from './StyledPokemonView';
import Search from '../Search/Search';
import Loading from '../../atoms/Loading/Loading';
import PokemonList from '../../layouts/PokemonList/PokemonList';

const PokemonView = () => {

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=100&limit=100';

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const pokemons = await response.json();
      setPokemons(pokemons);
      setLoading(false);
    } catch (error) {
      console.error(error); 
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [])

  console.log(pokemons.results);

  return (
    <StyledPokemonView className='PokemonView'>
      <Search />
        <PokemonList>
          {
            loading
              ? <Loading />
              : pokemons.results.map((pokemon, index) => {
                  return (
                  <li key={index}>{pokemon.name}</li>
                )
            })
          }
        </PokemonList>
      {/* <section className='wraper'>
      </section> */}
    </StyledPokemonView>
  )
}

export default PokemonView;
