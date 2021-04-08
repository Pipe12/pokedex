import { StyledPokemonView } from './StyledPokemonView';
import Search from '../Search/Search';
import PokemonList from '../../layouts/PokemonList/PokemonList';

const PokemonView = () => {
  return (
    <StyledPokemonView className='PokemonView'>
      <Search />
      <PokemonList>
        <li>Sara</li>
        <li>Sara</li>
        <li>Sara</li>
        <li>Sara</li>
        <li>Sara</li>
      </PokemonList>
    </StyledPokemonView>
  )
}

export default PokemonView;
