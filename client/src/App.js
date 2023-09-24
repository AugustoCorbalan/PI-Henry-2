import './App.css';
import { Route } from 'react-router-dom'
import React from 'react';

import { InitialPage } from './components/reactModules/initialPage.jsx';
import { Home } from './components/reactModules/home/home.jsx';
import { Detail } from './components/reactModules/detail/detail.jsx';
import { NewRecipe} from './components/reactModules/newRecipe/newRecipe.jsx';
import { Nav_bar } from './components/reactModules/nav_bar/nav_bar';
import axios from 'axios';

axios.defaults.baseURL= "https://api.render.com/deploy/srv-ck7l97o8elhc738j5jcg?key=S30Cmojb7-s";

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={InitialPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/detail/:id'>
        <Nav_bar/>
        <Detail/>
      </Route>
      <Route exact path ='/newRecipe'>
        <Nav_bar/>
        <NewRecipe/>
      </Route>
    </div>
  );
}

export default App;
