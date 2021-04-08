import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skeleton from '../layouts/Skeleton/Skeleton';
import Header from '../molecules/Header/Header';
import PokemonView from '../molecules/PokemonView/PokemonView';
import DetailView from '../molecules/DetailView/DetailView';
import GottaCatchEmAll from '../molecules/GottaCatchEmAll/GottaCatchEmAll';
import GlobalStyles from '../GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Skeleton className="App">
        <Header title={'Pokedex'}/>
        <PokemonView />
        <DetailView>
          <Router>
            <Switch>
              <Route exact path='/' component={GottaCatchEmAll} />
            </Switch>
          </Router>

        </DetailView>
      </Skeleton>
    </>
  );
}

export default App;
