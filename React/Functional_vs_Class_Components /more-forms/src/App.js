import logo from './logo.svg';
import './App.css';
import UserForm from "./components/UserForm";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserForm ></UserForm>
      </header>
    </div>
  );
}

export default App;
