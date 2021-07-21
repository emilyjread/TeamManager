
import React from 'react'
import './App.css';
import Main from './views/Main';
import Error from './views/Error';
import Detail from './views/Detail';
import Update from './views/Update';
import New from './views/New';
import {Router} from '@reach/router'


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/api/authors"/>
        <New path="/api/authors/new"/>
        <Detail path="/api/authors/:id"/>
        <Update path="/authors/:id/edit"/>
        <Error path="/api/authors/error"/>
      </Router>
    </div>
  );
}

export default App;
