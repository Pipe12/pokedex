import { StyledPokemonDetailImage } from './StyledPokemonDetailImage';

const PokemonDetailImage = ({ pokemon }) => {
  const { 
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
    <StyledPokemonDetailImage>
      <img src={imageUrl} alt={name}/>
    </StyledPokemonDetailImage>
  )
}

export default PokemonDetailImage;
