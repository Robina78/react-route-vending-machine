import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
       <Switch>
         <Route path="/" exact>
           <VendingMachine />
         </Route>  
         <Route path="/soda" exact>
           <Soda />
         </Route>
         <Route path="/chips" exact>
           <Chips />
         </Route>
         <Route path="/sardines" exact>
           <Sardines />
         </Route>
       </Switch>
      </BrowserRouter>      
    </main>
  );
}

export default App;
