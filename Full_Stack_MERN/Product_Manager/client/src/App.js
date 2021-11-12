import './App.css';
import AllProducts from './components/AllProducts';

import ProductForm from './components/ProductForm';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Switch>
            <Route exact path = "/">
                <ProductForm/>
                <AllProducts/>
            </Route>
        </Switch>

      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
