import { StyledPokemonImageCard } from './StyledPokemonImageCard';

const PokemonImageCard = ({ name, imageUrl }) => {
  return(
    <StyledPokemonImageCard className='PokemonImageCard'>
      <img src={imageUrl} alt={`Img of ${name}`}/>
    </StyledPokemonImageCard>
  )
}

export default PokemonImageCard;
