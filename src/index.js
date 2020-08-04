import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Detalhes from './Detalhes';
import Busca from './Busca';
import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/detalhes" component={Detalhes} />   
            <Route path="/busca" component={Busca} />   
    </Switch>
  </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root'));
  //registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
