import { StyledPokemonInfoCard } from './StyledPokemonInfoCard';

const PokemonInfoCard = ({ id, name }) => {
  return (
      <StyledPokemonInfoCard className='PokemonInfoCard'>
        <p># {id}</p>
        <h3>{name}</h3>
      </StyledPokemonInfoCard>
    )
}

export default PokemonInfoCard;
