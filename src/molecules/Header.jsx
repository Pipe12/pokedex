import HeaderTitle from '../atoms/HeaderTitle';

const Header = ({ title }) => {
  return (
    <header className='Header'>
      <HeaderTitle title={title}/>
    </header>
  )
}

export default Header;