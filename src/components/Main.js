import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import './Main.css';

import { Register } from './Register';
import { Login } from './Login';
import {PageNotFound} from "./PageNotFound"

export class Main extends React.Component {
    render() {
        return (

            <div className="main">
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>

        )
    }
}