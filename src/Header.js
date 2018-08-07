import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export class Header extends Component { // put this component in a separate file
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Around</h1>
            </header>
        );
    }
}