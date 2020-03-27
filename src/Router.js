import React from 'react';
import HomePage from './pages/HomePage'
import GeneralPage from './pages/GeneralPage'
import { Route, Switch } from 'react-router-dom';
import './App.css'

function Router(props){
    const menu = props.menu
    return (
      <Switch>
        <Route path='/' component={HomePage} exact/>
        {menu.map(menuItem => 
          <Route path={`/${menuItem}`} component={GeneralPage} exact key={menuItem}/>
        )}
        {menu.map(menuItem => 
          <Route path={`/${menuItem}/:id`} component={GeneralPage} key={menuItem}/>
        )}
      </Switch>
    
    );
}

export default Router;
