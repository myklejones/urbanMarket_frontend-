import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router'
import Login from './component/Login'
import Home from './component/Home'
import Redirect from './component/Redirect'
import CreateUser from './component/CreateUser'

function App() {
  return (
   
    <Switch>
      <Route exact path="/home"   render={(routerProps)=><Home {...routerProps}  /> }    />
      <Route path="/login"   render={(routerProps)=><Login {...routerProps}  /> }    />
      <Route path="/createUser"   render={(routerProps)=><CreateUser {...routerProps}  /> }    />
      <Route exact path="*"   render={(routerProps)=><Redirect {...routerProps}  /> }    />
      </Switch>
  );
}

export default App;
