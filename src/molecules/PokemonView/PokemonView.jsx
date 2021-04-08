import { StyledPokemonView } from './StyledPokemonView';
import Search from '../Search/Search';

const PokemonView = () => {
  return (
    <StyledPokemonView className='PokemonView'>
      <Search />
    </StyledPokemonView>
  )
}

export default PokemonView;
