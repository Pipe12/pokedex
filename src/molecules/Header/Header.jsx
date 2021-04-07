import { StyledHeader } from './StyledHeader';
import HeaderTitle from '../../atoms/HeaderTitle/HeaderTitle';

const Header = ({ title }) => {
  return (
    <StyledHeader className='Header'>
      <HeaderTitle title={title}/>
    </StyledHeader>
  )
}

export default Header;