import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledPokemonView = styled.section`
  padding: 20px;
  display: grid;
  grid-template-rows: 50px auto;
  row-gap: 20px;
  overflow: hidden;
`

export const StyledLink = styled(Link)`
  color: var(--text);
  background-color: var(--background-element);
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px var(--shadow);

li {
  margin: 0;
}
`
