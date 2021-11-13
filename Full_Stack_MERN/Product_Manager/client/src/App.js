import './App.css';
import React, { useState } from 'react'
import AllProducts from './components/AllProducts';
import ProductsInfo from './components/ProductsInfo';
import ProductForm from './components/ProductForm';

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


function App() {

  const [formSubmit, setFormSubmit] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        
        <Link to="/"> Home </Link>

        <Switch>
            <Route exact path = "/">
              <ProductForm formSubmit = {formSubmit} setFormSubmit = {setFormSubmit}/>

              <AllProducts formSubmit = {formSubmit}/>
          
            </Route>
            <Route exact path = "/api/product/:id">
                
                <ProductsInfo/>

            </Route>
        </Switch>

      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
