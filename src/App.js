import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router'
import Login from './component/Login'
import Home from './component/Home'

function App() {
  return (
   
    <Switch>
      <Route path="/login"   render={(routerProps)=><Login {...routerProps}  /> }    />
      <Route exact path="*"   render={(routerProps)=><Home {...routerProps}  /> }    />
      </Switch>
  );
}

export default App;
