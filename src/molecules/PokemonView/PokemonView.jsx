import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledPokemonView } from './StyledPokemonView';
import Search from '../Search/Search';
import Loading from '../../atoms/Loading/Loading';
import PokemonList from '../../layouts/PokemonList/PokemonList';
import PokeCard from '../PokeCard/PokeCard';

const PokemonView = () => {

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailPokemons, setDetailPokemons] = useState([]);

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const pokemons = await response.json();
      setPokemons(pokemons);
    } catch (error) {
      console.error(error); 
    }
  }

  const fetchDetailPokemon = async (pokeUrl) => {
    try {
      const response = await fetch(pokeUrl);
      const detailPokemon = await response.json();
      return detailPokemon;
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchPokemons()
  }, [])

  useEffect(() => {
    setLoading(true);
    if (pokemons.length !== 0 ) {
      const promes = pokemons.results.map(pokemon => fetchDetailPokemon(pokemon.url));
      const retriveAll = async function() {
        let results = await Promise.all(promes);
        setDetailPokemons(results);
        setLoading(false);
      }
      retriveAll();
    }
  }, [pokemons])
  


  return (
    <StyledPokemonView className='PokemonView'>
      <Search />
        <PokemonList>
          {
            loading
              ? <Loading />
              : detailPokemons.map((pokemon) => {
                  const { id, name} = pokemon;
                  return (
                    <Link
                      to={`/pokemon/${name}`}
                      className='Card__link'
                      key={id}
                    >
                      <li>
                        <PokeCard pokemon={pokemon}/>
                      </li>
                    </Link>
                  )
            })
          }
        </PokemonList>
    </StyledPokemonView>
  )
}

export default PokemonView;
