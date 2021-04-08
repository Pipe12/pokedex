import { StyledPokemonList } from './StyledPokemonList';

const PokemonList = ({ children }) => {
  return (
    <StyledPokemonList className='PokemonList'>
      { children }
    </StyledPokemonList>
  )
}

export default PokemonList;
