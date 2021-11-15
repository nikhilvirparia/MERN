import './App.css';
import React, {useState} from 'react';
import AllAuthors from './components/AllAuthors';
import AuthorEdit from './components/AuthorEdit'
import AuthorNew from './components/AuthorNew'

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
          <AllAuthors formSubmit = {formSubmit} setFromSubmit = {setFormSubmit}/>
      </Route>

      <Route exact path = "/authors/new">
            <AuthorNew formSubmit = {formSubmit} setFromSubmit= {setFormSubmit}/>
      </Route>

      
      <Route exact path = "/authors/edit/:id">
        <AuthorEdit formSubmit = {formSubmit} setFromSubmit= {setFormSubmit}/>
      </Route>

      </Switch>
      
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
