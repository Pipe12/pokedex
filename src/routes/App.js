import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-dom';
import Header from '../molecules/Header/Header';
import GlobalStyles from '../GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header title={'Pokedex'}/>
      </div>
    </>
  );
}

export default App;
