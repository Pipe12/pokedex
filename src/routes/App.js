import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-dom';
import Skeleton from '../layouts/Skeleton/Skeleton';
import Header from '../molecules/Header/Header';
import PokemonView from '../molecules/PokemonView/PokemonView';
import GlobalStyles from '../GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Skeleton className="App">
        <Header title={'Pokedex'}/>
        <PokemonView />
      </Skeleton>
    </>
  );
}

export default App;
