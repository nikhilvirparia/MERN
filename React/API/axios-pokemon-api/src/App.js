import logo from './logo.svg';
import './App.css';
import PokemonWithAxios from "./components/PokemonWithAxios";


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1> Pokemon API </h1>
        <PokemonWithAxios/>
        </header>
      </div>
  );
}

export default App;
