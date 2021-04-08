import { StyledSearch, StyledBsSearch } from './StyledSearch';

const Search = ( ) => {
  return (
    <StyledSearch>
      <StyledBsSearch/>
      <input 
        className='Search__input'
        type='text'
        name='country'
        placeholder='Searck for a Pokemon...'
      />
    </StyledSearch>
  )
}

export default Search;