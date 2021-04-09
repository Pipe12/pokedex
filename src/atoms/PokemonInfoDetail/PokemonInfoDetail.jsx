import { StyledPokemonInfoDetail } from './StylesPokemonInfoDetail';

const PokemonInfoDetail = ({ pokemon }) => {
  const {
    id,
    name,
    abilities,
    types
  } = pokemon
  return (
    <StyledPokemonInfoDetail className='PokemonInfoDetail'>
      <h1 className='DetailTitle'>{ name }</h1>
      <p>ID: {id}</p>
      <p>
        Type:
        {
          types.length > 0 
            ? (
                types.map((type, index) => {
                  return (
                    <span key={index}> {type.type.name}, </span>
                  )
                })
              )
            : null
        }
      </p>
      <p>
        Abilities:
        {
          abilities.length > 0 
            ? (
                abilities.map((ability, index) => {
                  return (
                    <span key={index}> {ability.ability.name}, </span>
                  )
                })
              )
            : null
        }
      </p>
    </StyledPokemonInfoDetail>
  )
}

export default PokemonInfoDetail;
