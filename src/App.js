import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router'
import Login from './component/Login'
import Home from './component/Home'
import Redirect from './component/Redirect'

function App() {
  return (
   
    <Switch>
      <Route exact path="/home"   render={(routerProps)=><Home {...routerProps}  /> }    />\
      <Route exact path="*"   render={(routerProps)=><Redirect {...routerProps}  /> }    />
      <Route path="/login"   render={(routerProps)=><Login {...routerProps}  /> }    />
      </Switch>
  );
}

export default App;
