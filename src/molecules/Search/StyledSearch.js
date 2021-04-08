import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const StyledSearch = styled.div` 
  padding: 16px 16px 16px 32px;
  background-color: var(--background-element); 
  color: var(--text);
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px var(--shadow);

  &:focus {
    outline: red;
  }

  input {
    background-color: var(--background-element);
    color: var(--text);
    margin-left: 24px;
    width: 100%;
    border: none;
  }

  input::placeholder {
    color: var(--text); 
  }

  input:focus {
    outline: none;
  }

  @media only screen and (min-width: 992px) {
    input {
      font-size: 14px;
    }
  }
`

export const StyledBsSearch = styled(BsSearch)`
  @media only screen and (min-width: 992px) {
    width: 22px;
  }
`
