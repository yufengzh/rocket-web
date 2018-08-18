import React, {Component} from 'react';
import { Icon } from 'antd';

import logo from '../assets/iamges/logo.svg';
//import './App.css';

export class Header extends Component { // put this component in a separate file
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Around</h1>
                {this.props.isLoggedIn? <span className="logout-icon" onClick={this.props.handleLogout}><Icon type="lock" style={{ fontSize: 20, color: '#08c' }} />Logout</span> : null}
            </header>
        );
    }
}