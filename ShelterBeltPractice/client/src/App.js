import React from 'react'
import './App.css';
import {Router, Link} from '@reach/router'
import Pets from './views/Pets';
import New from './views/New';
import Pet from './views/Pet'
import Update from './views/Update';
import NotFound from './views/NotFound';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/pets">All Pets</Link>
        <Link to="/pets/new">New Pet</Link>
      </nav>
      <Router>
        <Pets path="/pets"/>
        <New path="/pets/new"/>
        <Pet path="/pets/:id"/>
        <Update path="pets/:id/edit"/>
        <NotFound default/>
      </Router>
     
    </div>
  );
}

export default App;
