import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Info from './components/Info';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div className="App container">
            <h1>Luke Api Walker</h1>
            <Search></Search>
            <Switch>
              <Route path = "/:category/:id">
                <Info></Info>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
