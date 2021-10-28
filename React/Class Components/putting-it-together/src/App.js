import logo from './logo.svg';
import './App.css';
import PersonCard from "../../putting-it-together/src/components/PersonCard";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <PersonCard lName = {"Doe"} fName = {"Jane"} Age = {"45"} hairColor = {"Black"}></PersonCard>

          <PersonCard lName = {"Smith"} fName={"John"} Age = {"88"} hairColor = {"Brown"}></PersonCard>

          <PersonCard lName = {"Fillmore"} fName = {"Millard"} Age = {"50"} hairColor = {"Brown"}></PersonCard>

          <PersonCard lName = {"Smith"} fName = {"Maria"} Age = {"62"} hairColor = {"Brown"}></PersonCard>
        </header>
      </div>
  );
}

export default App;
