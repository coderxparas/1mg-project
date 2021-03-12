import React from 'react';
import ReactDOM from 'react-dom';
import Pokedex from "./container/Pokedex";
import Pokemon from './container/Pokemon';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./component/header";
import "./style.css";

class Cq extends React.Component {
    render(){
        return (
            <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Pokedex} />
                <Route exact path='/pokemon' component={() => <Pokemon url={localStorage.getItem('url')} />} />
            </Switch>
            </>
        );
    }
}



ReactDOM.render(
      <BrowserRouter>
	    <Cq />
    </BrowserRouter>,
	document.getElementById('root')
);