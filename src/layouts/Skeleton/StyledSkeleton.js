import styled from 'styled-components';

export const StyledSkeleton = styled.div`
  border: 1px solid green;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 80px auto;
`
