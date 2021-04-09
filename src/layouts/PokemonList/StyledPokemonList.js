import styled from "styled-components";

export const StyledPokemonList = styled.ul`
  margin: 0;
  padding: 20px;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 210px);
  grid-auto-columns: 210px;
  gap: 10px 10px;
  justify-content: center;
  background-color: var(--background);
  border-radius: 5px;
  overflow-y: scroll;
`
