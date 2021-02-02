import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Seci from './inisecion';
import Pg from './pginicio'
import Anoma from './anomalia';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App2 = ()=>(<Router>
  
    <Route exact path = "/" component = {Pg}/>

    <Route exact path = "/registro" component = {App}/>

    <Route exact path = "/secion" component = {Seci}/>

    <Route exact path = "/anomalia" component = {Anoma}/>

  
  
</ Router>)
render(<App2/>, document.getElementById('root'))

  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
