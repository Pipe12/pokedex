import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../atoms/Loading/Loading';
import { StyledPokemonDetail } from './StyledPokemonDetail';
import PokemonDetailImage from '../../atoms/PokemonDetailImage/PokemonDetailImage';


const PokemonDetail = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([])

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const pokemon = await response.json();
        setPokemon(pokemon);
        setLoading(false);
      } catch (error) {
        console.error(error); 
      }
    }
    fetchPokemon();
  }, [ url ]);

  return (
    <StyledPokemonDetail className='PokemonDetail'>
      {
        loading
          ? <Loading />
          : <>
              <PokemonDetailImage pokemon={pokemon}/>
            </>
      }
    </StyledPokemonDetail>
  )
}

export default PokemonDetail;
