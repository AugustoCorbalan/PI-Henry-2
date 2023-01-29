import './App.css';
import { Route } from 'react-router-dom'
import React from 'react';

import { InitialPage } from './components/reactModules/initialPage.jsx';
import { Home } from './components/reactModules/home.jsx';
import { Detail } from './components/reactModules/detail/detail.jsx';
import { NewRecipe} from './components/reactModules/newRecipe/newRecipe.jsx'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={InitialPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/detail/:id' render={()=> <Detail/>}/>
      <Route exact path ='/newRecipe'>
        <NewRecipe/>
      </Route>
    </div>
  );
}

export default App;
