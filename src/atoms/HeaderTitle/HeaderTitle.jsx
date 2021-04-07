import { StyledHeaderTitle } from './StyledHeaderTitle';

const HeaderTitle = ({ title }) => {
  return (
    <StyledHeaderTitle className='HeaderTitle'>
      { title }
    </StyledHeaderTitle>
  )
}

export default HeaderTitle;
