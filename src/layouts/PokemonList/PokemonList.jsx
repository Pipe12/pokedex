import { StyledPokemonList } from './StyledPokemonList';

const PokemonList = ({ children, handleScroll }) => {
  return (
    <StyledPokemonList 
      className='PokemonList'
      onScroll={handleScroll}
    >
      { children }
    </StyledPokemonList>
  )
}

export default PokemonList;
