import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { name } = useParams();

  return (
    <div className='PokemonDetail'>
      <h1>{ name }</h1>
    </div>
  )
}

export default PokemonDetail;
