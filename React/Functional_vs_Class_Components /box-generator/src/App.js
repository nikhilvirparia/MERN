import logo from './logo.svg';
import './App.css';
import BoxGenerator from "./components/BoxGenerator";
import {useState} from "react";

function App() {
        const [boxes, setBoxes] = useState([]);
        const handleNewBox = (color) => {
            setBoxes(oldBoxes => [...oldBoxes, color]);
        }

  return (
    <div className="App">
      <header className="App-header">
      <h1>The Box Generator</h1>
          <BoxGenerator handleNewBox={handleNewBox} boxes={boxes}></BoxGenerator>
      </header>
    </div>
  );
}

export default App;
