import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router'
import Login from './component/pages/Login'
import Home from './component/pages/Home'
import Redirect from './component/pages/Redirect'
import CreateUser from './component/pages/CreateUser'
import Navigationbar from './component/layouts/Navigationbar'
import Footer from './component/layouts/Footer'

function App() {
  return (
    <>
   <Navigationbar />
    <Switch>
      <Route exact path="/home"   render={(routerProps)=><Home {...routerProps}  /> }    />
      <Route path="/login"   render={(routerProps)=><Login {...routerProps}  /> }    />
      <Route path="/createUser"   render={(routerProps)=><CreateUser {...routerProps}  /> }    />
      <Route exact path="*"   render={(routerProps)=><Redirect {...routerProps}  /> }    />
      </Switch>
  <Footer />
  </>
  );
}

export default App;
