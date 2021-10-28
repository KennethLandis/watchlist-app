import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';
import Home from './components/Home';
import WatchlistContext from './WatchlistContext'
import STORE from './store'
import UserPage from './components/User-page';
import SignUp from './components/Sign-up'
import Searchpage from './components/Search-page';

class App extends Component {
  state = {
    clients: [],
    list: [],
    targetClient: []
  }

  componentDidMount() {
    this.setState({
      clients: STORE.clients,
      list: STORE.list
    })
  }
  
  setClient = newClient => {
    this.setState({
      targetClient: newClient
    })
  }

  addMovie = newMovie => {
    const newList = this.state.list
    newList.push(newMovie)
    this.setState({
      list: newList
    })
  }

  signOut = () => {
    this.setState({
      targetClient: [],
      list: []
    })
  }

  addClient = newClient => {
    const newClients = this.state.clients
    newClients.push(newClient)
    this.setState({
      clients: newClients
    })
  }

  deleteMovie = movieId => {
    const newList = this.state.list.filter(movie =>
      movie.id !== movieId)
    this.setState({
      list: newList
    })
  }

  render() {
    const contextValue = {
      clients: this.state.clients,
      targetClient: this.state.targetClient,
      setClient: this.setClient,
      signOut: this.signOut,
      list: this.state.list,
      addClient: this.addClient,
      addMovie: this.addMovie,
      deleteMovie: this.deleteMovie
    }
    
    return (
      <WatchlistContext.Provider value={contextValue}>
      <div className="App">
        <header className="App-header">
          <h1>
            Watchlist
          </h1>
        </header>
        <Route
          exact
          key={'/'}
          path={'/'}
          component={Home}
        />
        <Route
          exact
          key={'/user/:client_name'}
          path={'/user/:client_name'}
          component={UserPage}
        />
        <Route
          exact
          key={'/signup'}
          path={'/signup'}
          component={SignUp}
        />
        <Route
          exact
          key={'/search'}
          path={'/search'}
          component={Searchpage}
        />
        <footer className="footer">
            Kenneth Landis ©
          </footer>
      </div>
      </WatchlistContext.Provider>
    );
  };
};

export default App;
