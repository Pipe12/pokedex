import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skeleton from '../layouts/Skeleton/Skeleton';
import Header from '../molecules/Header/Header';
import PokemonView from '../molecules/PokemonView/PokemonView';
import DetailView from '../molecules/DetailView/DetailView';
import GottaCatchEmAll from '../molecules/GottaCatchEmAll/GottaCatchEmAll';
import GlobalStyles from '../GlobalStyles';
import PokemonDetail from '../molecules/PokemonDetail/PokemonDetail';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Skeleton className="App">
          <Header title={'Pokedex'}/>
          <PokemonView />
          <DetailView>
            <Switch>
              <Route exact path='/' component={GottaCatchEmAll} />
              <Route exact path='/pokemon/:name' component={PokemonDetail} />
            </Switch>
          </DetailView>
        </Skeleton>
      </Router>
    </>
  );
}

export default App;
