import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Pokemon API </h1>
          <Pokemon/>
      </header>
    </div>
  );
}

export default App;
