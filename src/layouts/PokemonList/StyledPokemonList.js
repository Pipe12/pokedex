import styled from "styled-components";

export const StyledPokemonList = styled.ul`
  border: 1px solid orchid;

  margin: 0;
  padding: 0;
  list-style: none;
  background-color: var(--background-element);
  box-shadow: 0px 2px 10px 0px var(--shadow);
  border-radius: 5px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 210px);
  grid-auto-columns: 210px;
  gap: 20px 20px;
  justify-content: center;
`
