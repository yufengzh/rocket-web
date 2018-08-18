import React, { Component } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import '../styles/App.css';
import { TOKEN_KEY } from '../constant';
class App extends Component {
    state = {
        isLoggedIn: Boolean(localStorage.getItem('TOKEN_KEY')) // empty, null, undefined all are false. [] {} are true.
    }
  render() {
    return (
      <div className="App">
          <Header  isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} />
          <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
      </div>
    );
  }

  handleLogin = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        this.setState({ isLoggedIn: true });
  }

  handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
      this.setState({ isLoggedIn: false });
  }
}


export default App;