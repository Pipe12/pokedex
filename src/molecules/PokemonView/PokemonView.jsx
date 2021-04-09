import { useState, useEffect } from 'react';
import { StyledPokemonView, StyledLink } from './StyledPokemonView';
import Search from '../Search/Search';
import Loading from '../../atoms/Loading/Loading';
import PokemonList from '../../layouts/PokemonList/PokemonList';
import PokeCard from '../PokeCard/PokeCard';

const PokemonView = () => {

  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50');
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailPokemons, setDetailPokemons] = useState([]);

  const fetchPokemons = async (currentUrl) => {
    setLoading(true);
    try {
      const response = await fetch(currentUrl);
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

  const handleScroll = (event) => {
    let element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if(pokemons.next !== null) {
        setCurrentUrl(pokemons.next);
      }
    }
    if (element.scrollTop === 0) {
      if(pokemons.previous !== null) {
        setCurrentUrl(pokemons.previous);
      }
    }
  }
  
  useEffect(() => {
    fetchPokemons(currentUrl)
  }, [currentUrl]);

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
  }, [pokemons]);

  return (
    <StyledPokemonView className='PokemonView'>
      <Search />
        <PokemonList handleScroll={handleScroll}>
          {
            loading
              ? <Loading />
              : detailPokemons.map((pokemon) => {
                  const { id, name} = pokemon;
                  return (
                    <StyledLink
                      to={`/pokemon/${name}`}
                      className='Card__link'
                      key={id}
                    >
                      <li>
                        <PokeCard pokemon={pokemon}/>
                      </li>
                    </StyledLink>
                  )
            })
          }
        </PokemonList>
    </StyledPokemonView>
  )
}

export default PokemonView;
