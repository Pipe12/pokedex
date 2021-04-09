import { StyledPokeCard } from './StyledPokeCard';
import PokemonImageCard from '../../atoms/PokemonImageCard/PokemonImageCard';
import PokemonInfoCard from '../../atoms/PokemonInfoCard/PokemonInfoCard';

const PokeCard = ({ pokemon }) => {
  const { 
    id, 
    name,
    sprites: {
      other: {
        dream_world: {
          front_default: imageUrl,
        },
      },
    }, 
  } = pokemon
  return (
    <StyledPokeCard className='PokeCard'>
      <PokemonImageCard name={name} imageUrl={imageUrl} />
      <PokemonInfoCard name={name} id={id} />
    </StyledPokeCard>
  )
}

export default PokeCard;
