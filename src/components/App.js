import React, { Component } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import '../styles/App.css';

class App extends Component {
    state = {
        isLoggedIn: Boolean(localStorage.getItem('TOKEN_KEY')) // empty, null, undefined all are false. [] {} are true.
    }
  render() {
    return (
      <div className="App">
          <Header />
          <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
      </div>
    );
  }

  handleLogin = (token) => {
        localStorage.setItem('TOKEN_KEY', true);
        this.setState({ isLoggedIn: true });
  }
}


export default App;