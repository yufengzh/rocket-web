import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//import './Main.css';

import { Register } from './Register';
import { Login } from './Login';
import { Home } from './Home';
import {PageNotFound} from "./PageNotFound"

export class Main extends React.Component {
    getHome = () => {
        return this.props.isLoggedIn ? <Home/> :  <Redirect to='/login'/>
    };

    // Redirect can do two things: Linked to, it's like the user clicking on the button.
    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to='/home'/> : <Login handleLogin={this.props.handleLogin}/>
    };

    getRoot = () => {
        return <Redirect to='/login' />;
    };

    render() {
        return (

            <div className="main">
                <Switch>
                    <Route exact path="/" component={this.getRoot}/>
                    {/* another way to do Route render
                        the return value of the function is the component you want to render
                    */}


                    <Route path="/home" render={this.getHome} />
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>

        )
    }
}