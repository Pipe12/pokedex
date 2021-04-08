import styled from "styled-components";

export const StyledPokemonList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 210px);
  grid-auto-columns: 210px;
  gap: 10px 10px;
  justify-content: center;
  background-color: var(--background-element);
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px var(--shadow);
  overflow-y: scroll;
`
