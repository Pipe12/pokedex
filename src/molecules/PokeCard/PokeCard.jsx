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
    <div className='PokeCard'>
      <figure>
        <img src={imageUrl} alt={`Img of ${name}`}/>
      </figure>
      <div>
        <p>{id}</p>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default PokeCard;
